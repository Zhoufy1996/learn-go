/** @format */

import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { createContainer } from 'unstated-next';
import { ListData } from '../../shared/components/NestedList';
import { routerModel } from '../models/router.model';
import { routerData } from '../router';

const Transfrom = (data: routerModel, _baseUrl: string): ListData => {
    const isMatch = useRouteMatch(`${_baseUrl}${data.path}`);
    return {
        element: (
            <span style={isMatch ? { color: 'red' } : {}}>{data.name}</span>
        ),
        // component: RouteComponent,
        key: data.path,
        children:
            data.children == null
                ? null
                : data.children.map((d) =>
                      Transfrom(d, `${_baseUrl}${d.path}`)
                  ),
        value: `${_baseUrl}${data.path}`,
    };
};

const transformRouterDataToListData = (dataArr: routerModel[]): ListData[] => {
    return dataArr.map((data, index) => Transfrom(data, ''));
};

const RouterState = () => {
    const history = useHistory();
    const [routerSidebarData, setRouterSideBarData] = useState<ListData[]>(
        transformRouterDataToListData(routerData)
    );

    const handleSelect = (data: ListData, openKeys: string[]) => {
        window.console.log(data);
        if (!data.children) {
            history.push(data.value);
        }
    };

    return {
        routerSidebarData,
        handleSelect,
    };
};

const RouterContainer = createContainer(RouterState);

export default RouterContainer;
