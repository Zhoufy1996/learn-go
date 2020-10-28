/** @format */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragGridProps, DropEventProps, KeySortNoMap } from './model';
import useStyles from './style';
import DropContainer from './DropContainer';
import DragItem from './DragItem';
import { moveTo, arrToMap, mapToArr } from './utils';

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
    sortKeys,
    defaultKeys = [],
    onChange = () => {},
    rowCount = 4,
    paddingRatio = 0.4,
}: DragGridProps<T>) => {
    const classes = useStyles();

    // 计算container与width的长度
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

    // true为受控,false为非受控
    const isControllerdKeys = sortKeys != null;

    // 传入arr, 转化为map,兼容受控与非受控模式
    const [keySortNoMap, setKeySortNoMap] = useState<KeySortNoMap>(
        arrToMap(isControllerdKeys ? (sortKeys as string[]) : defaultKeys)
    );

    useEffect(() => {
        if (isControllerdKeys && sortKeys) {
            setKeySortNoMap(arrToMap(sortKeys));
        }
    }, [sortKeys, isControllerdKeys]);

    const sortNoKeys: string[] = useMemo(() => {
        return mapToArr(keySortNoMap);
    }, [keySortNoMap]);

    const data = useMemo(() => {
        return dataSource.sort((l, r) => {
            return keySortNoMap[getKey(l)] - keySortNoMap[getKey(r)];
        });
    }, [dataSource, getKey, keySortNoMap]);

    // 与拖动排序有关的逻辑
    const [draggingData, setDraggingData] = useState<T | null>(null);

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

    const onDragging = useCallback((isDraggingData: T, isDragging: boolean) => {
        if (isDragging) {
            setDraggingData(isDraggingData);
        } else {
            setDraggingData(null);
        }
    }, []);

    const getStyleBeforeContainer = useCallback(
        ({ isOver, index }: DropEventProps) => {
            return {
                width: isFirst(index)
                    ? `${(paddingWidth / 2) * 100}%`
                    : `${paddingWidth * 100}%`,
                backgroundColor: isOver ? 'yellow' : 'inherit',
            };
        },
        [isFirst, paddingWidth]
    );

    const getStyleAfterContainer = useCallback(
        ({ isOver, index }: DropEventProps) => {
            if (index === data.length - 1) {
                return {
                    backgroundColor: isOver ? 'yellow' : 'inherit',
                    flex: 1,
                };
            }
            return {
                width: `${(paddingWidth / 2) * 100}%`,
                backgroundColor: isOver ? 'yellow' : 'inherit',
            };
        },
        [paddingWidth, data]
    );

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
                                index={index}
                                getStyle={getStyleBeforeContainer}
                            />
                            <div style={{ width: `${containerWidth * 100}%` }}>
                                <DragItem
                                    isDraggingEffect={onDragging}
                                    data={row}
                                    dragType={type}
                                >
                                    <DropContainer
                                        data={row}
                                        accept={type}
                                        onDrop={handleExChange}
                                        index={index}
                                    >
                                        {render(
                                            row,
                                            draggingData == null
                                                ? false
                                                : getKey(draggingData) ===
                                                      getKey(row)
                                        )}
                                    </DropContainer>
                                </DragItem>
                            </div>
                            {isLast(index) || index === data.length - 1 ? (
                                <DropContainer
                                    accept={type}
                                    data={row}
                                    onDrop={handleDropAfter}
                                    index={index}
                                    getStyle={getStyleAfterContainer}
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
