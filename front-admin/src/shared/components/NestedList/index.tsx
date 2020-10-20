/** @format */
import React, { useState, useMemo, useCallback } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ListItemText, useTheme } from '@material-ui/core';

export interface ListData {
    key: string;
    // component: ({ data }: { data: ListData }) => JSX.Element | null;
    element: JSX.Element | null;
    children?: ListData[] | null;
    value: string;
}

interface CustomListViewProps {
    data: ListData;
    style?: React.CSSProperties | undefined;
    onClick?: () => void;
    expandComponent?: JSX.Element | null;
}

const ListView = ({
    data,
    style = {},
    onClick = () => {},
    expandComponent = null,
}: CustomListViewProps) => {
    // const Component = data.component;
    return (
        <ListItem style={style} button onClick={onClick}>
            <ListItemText>
                {data.element}
                {/* <Component data={data} /> */}
            </ListItemText>
            {expandComponent}
        </ListItem>
    );
};

interface CustomListItemProps {
    data: ListData;
    openKeys: string[];
    close: (data: ListData) => void;
    open: (data: ListData) => void;
    depth: number;
}

const CustomListItem = ({
    data,
    openKeys,
    close,
    open,
    depth,
}: CustomListItemProps) => {
    const theme = useTheme();
    const isOpen = openKeys.includes(data.key);
    const hasChildren: boolean =
        (data.children && data.children.length > 0) || false;

    const handleClick = useCallback(() => {
        if (isOpen) {
            close(data);
        } else {
            open(data);
        }
    }, [isOpen, data, close, open]);
    const expandComponent = useMemo(() => {
        if (!hasChildren) {
            return null;
        }
        return isOpen ? <ExpandLess /> : <ExpandMore />;
    }, [isOpen, hasChildren]);
    return (
        <>
            <ListView
                expandComponent={expandComponent}
                data={data}
                onClick={handleClick}
                style={{ paddingLeft: theme.spacing(depth) }}
            />
            {hasChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    {data.children &&
                        data.children.map((row) => {
                            return (
                                <CustomListItem
                                    data={row}
                                    openKeys={openKeys}
                                    close={close}
                                    open={open}
                                    depth={depth + 1}
                                    key={row.key}
                                />
                            );
                        })}
                </Collapse>
            )}
        </>
    );
};

interface CustomNestedListProps {
    dataSource: ListData[];
    defaultOpenKeys?: string[];
    openKeys?: string[];
    onClick?: (onClickData: ListData, openkeys: string[]) => void;
    listTag?: 'div' | 'nav';
    className?: string;
    style?: React.CSSProperties;
}

const CustomNestedList = ({
    dataSource,
    defaultOpenKeys,
    openKeys,
    onClick = () => {},
    listTag = 'div',
    className = '',
    style = {},
}: CustomNestedListProps) => {
    const isControlledMode = openKeys !== undefined;

    const defaultOpenKeysState: string[] = isControlledMode
        ? (openKeys as string[])
        : defaultOpenKeys || [];

    const [openKeysState, setOpenKeysState] = useState<string[]>(
        defaultOpenKeysState
    );
    const changeOpenKeysState = useCallback(
        (data: ListData, keys: string[]) => {
            onClick(data, keys);
            setOpenKeysState(keys);
        },
        [onClick]
    );

    const open = useCallback(
        (data: ListData) => {
            changeOpenKeysState(data, [
                ...new Set([...openKeysState, data.key]),
            ]);
        },
        [openKeysState, changeOpenKeysState]
    );

    const close = useCallback(
        (data: ListData) => {
            changeOpenKeysState(
                data,
                openKeysState.filter((key) => key !== data.key)
            );
        },
        [openKeysState, changeOpenKeysState]
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
                        openKeys={openKeysState}
                        open={open}
                        close={close}
                        depth={0}
                        key={row.key}
                    />
                );
            })}
        </List>
    );
};

export default CustomNestedList;
