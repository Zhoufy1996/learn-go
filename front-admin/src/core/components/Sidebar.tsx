/** @format */
import React from 'react';
import NestedList from '../../shared/components/NestedList';
import RouterContainer from '../state/router';

const SiderBar = () => {
    const { routerSidebarData } = RouterContainer.useContainer();
    return <NestedList data={routerSidebarData} />;
};

export default SiderBar;
