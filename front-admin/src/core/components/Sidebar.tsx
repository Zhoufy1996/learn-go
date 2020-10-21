/** @format */
import React from 'react';
import { CustomNestedList } from '../../shared/components/NestedList';
import RouterContainer from '../state/router';
import useStyles from './style';

const SiderBar = () => {
    const {
        routerSidebarData,
        handleSelect,
        selectedPath,
        openKeys,
    } = RouterContainer.useContainer();

    const classes = useStyles();
    return (
        <CustomNestedList
            className={classes.root}
            dataSource={routerSidebarData}
            onClick={handleSelect}
            defaultSelectKey={selectedPath}
            openKeys={openKeys}
        />
    );
};

export default SiderBar;
