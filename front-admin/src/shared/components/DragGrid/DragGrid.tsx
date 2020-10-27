/** @format */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    DragGridProps,
    KeySortNoMap,
    HandleDrop,
    BaseDragItemProps,
    BaseDropContainerProps,
} from './model';
import DropDragItem from './DropDragItem';
import useStyles from './style';
import DropContainer from './DropContainer';

// 问题 map 与 两次 splite 性能比较
const moveTo = <T,>(beginIndex: number, endIndex: number, originArr: T[]) => {
    if (beginIndex < endIndex) {
        return originArr.map((n, index) => {
            if (index < beginIndex) {
                return n;
            }

            if (index >= beginIndex && index < endIndex) {
                return originArr[index + 1];
            }

            if (index === endIndex) {
                return originArr[beginIndex];
            }

            return n;
        });
    }

    if (beginIndex > endIndex) {
        return originArr.map((n, index) => {
            if (index < endIndex) {
                return n;
            }

            if (index === endIndex) {
                return originArr[beginIndex];
            }

            if (index > endIndex && index <= beginIndex) {
                return originArr[index - 1];
            }
            return n;
        });
    }
    return originArr;
};

const arrToMap = (keys: string[]): KeySortNoMap => {
    return Object.fromEntries(keys.map((key, index) => [key, index]));
};

const mapToArr = (map: KeySortNoMap): string[] => {
    return Object.entries(map)
        .sort(([_1, lSortNo], [_2, rSortNo]) => lSortNo - rSortNo)
        .map(([key]) => key);
};

/**
 * 受控 / 非受控
 * 假设keys与dataSource一一对应
 * @param param0
 */
const DragGrid = <T,>({
    dataSource,
    getKey,
    type,
    render,
    dropDragItemProps,
    sortKeys,
    defaultKeys = [],
    onChange = () => {},
    rowCount = 4,
    paddingRatio = 0.4,
}: DragGridProps<T>) => {
    const containerWidth = useMemo(() => {
        return 1 / ((paddingRatio + 1) * rowCount);
    }, [rowCount, paddingRatio]);
    const paddingWidth = useMemo(() => {
        return (1 / ((paddingRatio + 1) * rowCount)) * paddingRatio;
    }, [paddingRatio, rowCount]);

    const isFirst = useCallback(
        (n: number) => {
            return n % rowCount === 0;
        },
        [rowCount]
    );

    const isLast = useCallback(
        (n: number) => {
            return (n + 1) % rowCount === 0;
        },
        [rowCount]
    );

    const isControllerdKeys = sortKeys != null;

    const classes = useStyles();

    const [keySortNoMap, setKeySortNoMap] = useState<KeySortNoMap>(
        arrToMap(isControllerdKeys ? (sortKeys as string[]) : defaultKeys)
    );
    useEffect(() => {
        if (isControllerdKeys && sortKeys) {
            setKeySortNoMap(arrToMap(sortKeys));
        }
    }, [sortKeys, isControllerdKeys]);

    const [draggingData, setDraggingData] = useState<T | null>(null);

    const sortNoKeys: string[] = useMemo(() => {
        return mapToArr(keySortNoMap);
    }, [keySortNoMap]);

    const data = useMemo(() => {
        return dataSource.sort((l, r) => {
            return keySortNoMap[getKey(l)] - keySortNoMap[getKey(r)];
        });
    }, [dataSource, getKey, keySortNoMap]);

    const handleChange = useCallback(
        (map: KeySortNoMap) => {
            if (isControllerdKeys) {
                onChange(mapToArr(map));
            } else {
                setKeySortNoMap(map);
            }
        },
        [isControllerdKeys, onChange]
    );

    const handleExChange = useCallback(
        (dropData: T) => {
            if (draggingData != null) {
                const dropKey = getKey(dropData);
                const dragKey = getKey(draggingData);
                const newKeySortNoMap = {
                    ...keySortNoMap,
                    [dropKey]: keySortNoMap[dragKey],
                    [dragKey]: keySortNoMap[dropKey],
                };
                handleChange(newKeySortNoMap);
            }
        },
        [draggingData, getKey, keySortNoMap, handleChange]
    );

    const handleDropAfter = useCallback(
        (dropData: T) => {
            if (draggingData != null) {
                const dropKey = getKey(dropData);
                const dragKey = getKey(draggingData);
                const dropIndex = keySortNoMap[dropKey];
                const dragIndex = keySortNoMap[dragKey];
                const newKeys = moveTo<string>(
                    dragIndex,
                    dropIndex - (dragIndex < dropIndex ? 0 : 1),
                    sortNoKeys
                );
                handleChange(arrToMap(newKeys));
            }
        },
        [draggingData, getKey, sortNoKeys, handleChange, keySortNoMap]
    );

    const handleDropBefore = useCallback(
        (dropData: T) => {
            if (draggingData != null) {
                const dropKey = getKey(dropData);
                const dragKey = getKey(draggingData);
                const dropIndex = keySortNoMap[dropKey];
                const dragIndex = keySortNoMap[dragKey];
                const newKeys = moveTo<string>(
                    dragIndex,
                    dropIndex - (dragIndex < dropIndex ? 1 : 0),
                    sortNoKeys
                );
                handleChange(arrToMap(newKeys));
            }
        },
        [draggingData, getKey, sortNoKeys, handleChange, keySortNoMap]
    );

    const dragProps: BaseDragItemProps<T> = useMemo(() => {
        return {
            isDraggingEffect: (isDraggingData, isDragging) => {
                if (isDragging) {
                    setDraggingData(isDraggingData);
                } else {
                    setDraggingData(null);
                }
            },
        };
    }, []);

    const dropProps: BaseDropContainerProps<T> = useMemo(() => {
        return {
            onDrop: (dropData) => {
                handleExChange(dropData);
            },
        };
    }, [handleExChange]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classes.root}>
                {data.map((row, index) => {
                    return (
                        <React.Fragment key={getKey(row)}>
                            <DropContainer
                                accept={type}
                                data={row}
                                onDrop={handleDropBefore}
                                getStyle={({ isOver }) => {
                                    return {
                                        width: isFirst(index)
                                            ? `${(paddingWidth / 2) * 100}%`
                                            : `${paddingWidth * 100}%`,
                                        backgroundColor: isOver
                                            ? 'yellow'
                                            : 'inherit',
                                    };
                                }}
                            />
                            <div style={{ width: `${containerWidth * 100}%` }}>
                                <DropDragItem
                                    {...dropDragItemProps}
                                    dragProps={dragProps}
                                    dropProps={dropProps}
                                    data={row}
                                    type={type}
                                >
                                    {render(
                                        row,
                                        draggingData == null
                                            ? false
                                            : getKey(draggingData) ===
                                                  getKey(row)
                                    )}
                                </DropDragItem>
                            </div>
                            {isLast(index) || index === data.length - 1 ? (
                                <DropContainer
                                    accept={type}
                                    data={row}
                                    onDrop={handleDropAfter}
                                    getStyle={({ isOver }) => {
                                        return {
                                            width: `${
                                                (paddingWidth / 2) * 100
                                            }%`,
                                            backgroundColor: isOver
                                                ? 'yellow'
                                                : 'inherit',
                                        };
                                    }}
                                />
                            ) : null}
                        </React.Fragment>
                    );
                })}
            </div>
        </DndProvider>
    );
};

export default DragGrid;
