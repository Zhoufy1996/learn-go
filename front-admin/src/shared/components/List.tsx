/** @format */

import { useState } from 'react';
/** @format */

import useStyles from '../../features/login/style';

/**
 * openKeys: []
 *
 */

interface ListData {
    key: string;
    component: JSX.Element | null;
    children?: ListData[];
}

interface NestedListProps {
    defaultOpenKeys?: string[];
    openKeys?: string[];
    dataSource: ListData[];
    onClick?: (onClickData?: ListData, openkeys?: string[]) => void;
}

const NestedList = ({
    dataSource,
    defaultOpenKeys,
    openKeys,
    onClick = () => {},
}: NestedListProps) => {
    const isControlledMode = openKeys !== undefined;

    const defaultOpenKeysState: string[] = isControlledMode
        ? (openKeys as string[])
        : defaultOpenKeys || [];

    const [openKeysState, setOpenKeysState] = useState<string[]>(
        defaultOpenKeysState
    );
    const changeOpenKeysState = (data: ListData, keys: string[]) => {
        if (isControlledMode) {
            onClick(data, keys);
        }
        setOpenKeysState(keys);
    };
};
