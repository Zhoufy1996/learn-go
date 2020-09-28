/** @format */

import React, { useState, useMemo } from 'react';
import { useTheme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

export interface ListData {
    component: JSX.Element | null;
    key: string | number;
    children?: ListData[];
    isOpen?: boolean;
    onClick: () => void;
}

interface Props {
    data: ListData[];
    listTag: 'div' | 'nav';
    depth: number;
}

const AutoList = ({ data, depth = 0 }: { data: ListData; depth: number }) => {
    const [open, setOpen] = useState(data.isOpen);
    const hasChildren = data.children && data.children.length > 0;
    const ExpandComponent = useMemo(() => {
        if (!hasChildren) {
            return null;
        }
        return open ? <ExpandLess /> : <ExpandMore />;
    }, [open, hasChildren]);
    const theme = useTheme();
    return (
        <>
            <ListItem
                style={{ padding: 0, paddingLeft: theme.spacing(depth * 2) }}
                button
                onClick={() => {
                    setOpen(!open);
                    data.onClick();
                }}
            >
                <ListItemText>{data.component}</ListItemText>
                {ExpandComponent}
            </ListItem>
            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <NestedList
                        data={data.children as ListData[]}
                        listTag="div"
                        depth={depth + 1}
                    />
                </Collapse>
            )}
        </>
    );
};

const NestedList = ({ data, listTag, depth = 0 }: Props) => {
    return (
        <List component={listTag} aria-labelledby="nested-list-subheader">
            {data.map((item) => {
                return <AutoList key={item.key} data={item} depth={depth} />;
            })}
        </List>
    );
};

export default NestedList;
