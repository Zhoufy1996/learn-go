/** @format */
import React from 'react';
import CustomNestedList from '../../shared/components/NestedList';
import RouterContainer from '../state/router';

const SiderBar = () => {
    const { routerSidebarData, handleSelect } = RouterContainer.useContainer();
    window.console.log(routerSidebarData);
    return (
        <CustomNestedList
            style={{ width: 300 }}
            dataSource={routerSidebarData}
            onClick={handleSelect}
        />
    );
};

export default SiderBar;
