/** @format */

import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { createContainer } from 'unstated-next';
import { ListData } from '../../shared/components/NestedList';
import { routerModel } from '../models/router.model';
import { routerData } from '../router';

const Transfrom = (data: routerModel, _baseUrl: string): ListData => {
    return {
        component: <span>{data.name}</span>,
        key: data.path,
        children:
            data.children == null
                ? null
                : data.children.map((d) =>
                      Transfrom(d, `${_baseUrl}${d.path}`)
                  ),
    };
};

const transformRouterDataToListData = (dataArr: routerModel[]): ListData[] => {
    return dataArr.map((data, index) => Transfrom(data, ''));
};

const RouterState = () => {
    const [routerSidebarData, setRouterSideBarData] = useState<ListData[]>(
        transformRouterDataToListData(routerData)
    );

    return {
        routerSidebarData,
    };
};

const RouterContainer = createContainer(RouterState);

export default RouterContainer;
