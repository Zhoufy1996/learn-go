/** @format */
import React, { useMemo, useCallback } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ListItemText, useTheme } from '@material-ui/core';
import { ListData } from './model';

interface CustomListItemProps<T> {
    data: ListData<T>;
    openKeys: string[];
    selectKey: string;
    close: (data: ListData<T>) => void;
    open: (data: ListData<T>) => void;
    select: (data: ListData<T>) => void;
    depth: number;
}

const CustomListItem = <T,>({
    data,
    openKeys,
    close,
    open,
    select,
    depth,
    selectKey,
}: CustomListItemProps<T>) => {
    const theme = useTheme();
    const isOpen = openKeys.includes(data.key);
    const isSelected = data.key === selectKey;
    const hasChildren: boolean =
        (data.children && data.children.length > 0) || false;

    const handleClick = useCallback(() => {
        if (hasChildren) {
            if (isOpen) {
                close(data);
            } else {
                open(data);
            }
        } else {
            select(data);
        }
    }, [isOpen, data, close, open, hasChildren, select]);
    const expandComponent = useMemo(() => {
        if (!hasChildren) {
            return null;
        }
        return isOpen ? <ExpandLess /> : <ExpandMore />;
    }, [isOpen, hasChildren]);

    const className = useMemo(() => {
        if (isSelected) {
            return 'list-item-selected';
        }
        if (isOpen) {
            return 'list-item-open';
        }
        return '';
    }, [isSelected, isOpen]);
    return (
        <>
            <ListItem
                className={className}
                style={{ paddingLeft: theme.spacing(depth) }}
                button
                onClick={handleClick}
            >
                <ListItemText>
                    {data.render(data, isOpen, isSelected)}
                </ListItemText>
                {expandComponent}
            </ListItem>

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
                                    select={select}
                                    selectKey={selectKey}
                                />
                            );
                        })}
                </Collapse>
            )}
        </>
    );
};

export default CustomListItem;
