/** @format */

import React, { useEffect, useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragGridProps, SortMap } from './model';
import DropDragItem from './DropDragItem';
import useStyles from './style';
import DropContainer from './DropContainer';

const DragGrid = <T,>({
    dataSource,
    getKey,
    type,
    render,
    dropDragItemProps,
    sortKeys,
}: DragGridProps<T>) => {
    const classes = useStyles();
    const [keySortNoMap, setKeySortNoMap] = useState<SortMap>({});
    const [sortNoKeyMap, setSortNoKeyNoMap] = useState<SortMap>({});

    const [draggingData, setDraggingData] = useState<T | null>(null);

    useEffect(() => {
        const keyToSortNoMap: SortMap = {};
        const SortNoToKeyMap: SortMap = {};

        sortKeys.forEach((n, i) => {
            keyToSortNoMap[n] = i;
            SortNoToKeyMap[i] = n;
        });

        setKeySortNoMap(keyToSortNoMap);
        setSortNoKeyNoMap(SortNoToKeyMap);
    }, [sortKeys]);

    const data = useMemo(() => {
        return dataSource.sort((l, r) => {
            return keySortNoMap[getKey(l)] - keySortNoMap[getKey(r)];
        });
    }, [dataSource, getKey, keySortNoMap]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classes.root}>
                {data.map((row) => {
                    return (
                        <React.Fragment key={getKey(row)}>
                            <DropContainer accept={type} data={data} />
                            <DropDragItem
                                {...dropDragItemProps}
                                data={row}
                                type={type}
                            >
                                {render(row)}
                            </DropDragItem>
                            <DropContainer accept={type} data={data} />
                        </React.Fragment>
                    );
                })}
            </div>
        </DndProvider>
    );
};

export default DragGrid;
