/** @format */

import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ListItemText } from '@material-ui/core';

export interface ListData {
    component: JSX.Element | null;
    key: string | number;
    children?: ListData[] | null;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onClick?: (data?: ListData) => void;
    recordIndex: number[];
}

interface ListViewProps {
    data: ListData;
    isOpen: boolean;
    style: React.CSSProperties | undefined;
    hasChildren: boolean;
    onClick?: () => void;
}

const ListView = ({
    data,
    isOpen,
    style = {},
    onClick = () => {},
    hasChildren,
}: ListViewProps) => {
    const ExpandComponent = useMemo(() => {
        if (!hasChildren) {
            return null;
        }
        return isOpen ? <ExpandLess /> : <ExpandMore />;
    }, [isOpen, hasChildren]);
    const handleClick = useCallback(() => {
        return onClick();
    }, [onClick]);

    return (
        <ListItem style={style} button onClick={handleClick}>
            <ListItemText>{data.component}</ListItemText>
            {ExpandComponent}
        </ListItem>
    );
};

interface AutoListProps {
    data: ListData;
}

const AutoList = ({ data }: AutoListProps) => {
    const depth = data.recordIndex.length;
    const isControlled = data.isOpen !== undefined;
    const hasChildren: boolean =
        (data.children && data.children.length > 0) || false;

    const [open, setOpen] = useState<boolean>(data.defaultOpen || false);

    const hasOpen: boolean = isControlled ? (data.isOpen as boolean) : open;

    const theme = useTheme();
    const onClick = useCallback(() => {
        if (isControlled && typeof data.onClick === 'function') {
            data.onClick(data);
        } else {
            setOpen((pre) => !pre);
        }
    }, [isControlled, data]);
    return (
        <>
            <ListView
                data={data}
                isOpen={hasOpen}
                style={{ padding: 0, paddingLeft: theme.spacing(depth * 2) }}
                onClick={onClick}
                hasChildren={hasChildren}
            />

            {hasChildren && (
                <Collapse in={hasOpen} timeout="auto" unmountOnExit>
                    <NestedList
                        data={data.children as ListData[]}
                        listTag="div"
                    />
                </Collapse>
            )}
        </>
    );
};

interface NestedListProps {
    data: ListData[];
    listTag?: 'div' | 'nav';
}

const NestedList = ({ data = [], listTag = 'div' }: NestedListProps) => {
    return (
        <List component={listTag} aria-labelledby="nested-list-subheader">
            {data.map((item) => {
                return (
                    <AutoList
                        key={item.key}
                        data={item}
                        depth={item.recordIndex.length}
                    />
                );
            })}
        </List>
    );
};

export default NestedList;
