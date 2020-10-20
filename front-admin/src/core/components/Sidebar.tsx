/** @format */
import React from 'react';
import CustomNestedList from '../../shared/components/NestedList';
import RouterContainer from '../state/router';

const SiderBar = () => {
    const { routerSidebarData } = RouterContainer.useContainer();
    window.console.log(routerSidebarData);
    return <CustomNestedList dataSource={routerSidebarData} />;
};

export default SiderBar;
