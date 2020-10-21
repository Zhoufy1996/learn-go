/** @format */
import React, { useState, useCallback } from 'react';
import List from '@material-ui/core/List';
import CustomListItem from './Item';
import { ListData } from './model';

interface CustomNestedListProps<T> {
    dataSource: ListData<T>[];
    defaultOpenKeys?: string[];
    openKeys?: string[];
    onClick?: (
        onClickData: ListData<T>,
        openKeys: string[],
        selectKey: string
    ) => void;
    listTag?: 'div' | 'nav';
    className?: string;
    style?: React.CSSProperties;
    selectKey?: string;
    defaultSelectKey?: string;
}

const CustomNestedList = <T,>({
    dataSource,
    defaultOpenKeys,
    openKeys,
    onClick = () => {},
    listTag = 'div',
    className = '',
    style = {},
    selectKey,
    defaultSelectKey,
}: CustomNestedListProps<T>) => {
    const isControlledOpenKey = openKeys !== undefined;

    const [openKeysState, setOpenKeysState] = useState<string[]>(
        isControlledOpenKey ? (openKeys as string[]) : defaultOpenKeys || []
    );

    const isControlledSelectKey = selectKey !== undefined;

    const [selectKeyState, setSelectKeyState] = useState<string>(
        isControlledSelectKey ? (selectKey as string) : defaultSelectKey || ''
    );

    const changeOpenKeysState = useCallback(
        (data: ListData<T>, keys: string[]) => {
            onClick(data, keys, selectKeyState);
            setOpenKeysState(keys);
        },
        [onClick, selectKeyState]
    );

    const open = useCallback(
        (data: ListData<T>) => {
            changeOpenKeysState(data, [
                ...new Set([...openKeysState, data.key]),
            ]);
        },
        [openKeysState, changeOpenKeysState]
    );

    const close = useCallback(
        (data: ListData<T>) => {
            changeOpenKeysState(
                data,
                openKeysState.filter((key) => key !== data.key)
            );
        },
        [openKeysState, changeOpenKeysState]
    );

    const select = useCallback(
        (data: ListData<T>) => {
            onClick(data, openKeysState, data.key);
            setSelectKeyState(data.key);
        },
        [onClick, openKeysState]
    );

    return (
        <List
            style={style}
            className={className}
            component={listTag}
            aria-labelledby="nested-list-subheader"
        >
            {dataSource.map((row) => {
                return (
                    <CustomListItem
                        data={row}
                        openKeys={
                            isControlledOpenKey
                                ? (openKeys as string[])
                                : openKeysState
                        }
                        open={open}
                        close={close}
                        depth={0}
                        key={row.key}
                        select={select}
                        selectKey={
                            isControlledSelectKey
                                ? (selectKey as string)
                                : selectKeyState
                        }
                    />
                );
            })}
        </List>
    );
};

export default CustomNestedList;
