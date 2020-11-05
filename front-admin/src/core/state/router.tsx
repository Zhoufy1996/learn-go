/** @format */

import React, { useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createContainer } from 'unstated-next';
import { ListData } from '../../shared/components/NestedList';
import { routerModel } from '../models/router.model';
import { routerData } from '../router';

type RouteListData = ListData<routerModel>;

const Transfrom = (
    data: routerModel,
    _baseUrl: string
): RouteListData | null => {
    if (!data.showInSiderbar) {
        return null;
    }
    return {
        render: (row: RouteListData, isOpen: boolean, isSelected: boolean) => {
            return (
                <span style={isSelected ? { color: 'red' } : {}}>
                    {row.data.name}
                </span>
            );
        },
        key: `${_baseUrl}${data.path}`,
        children:
            data.children == null
                ? null
                : (data.children
                      .map((d) => Transfrom(d, `${_baseUrl}${data.path}`))
                      .filter((row) => row != null) as RouteListData[]),
        data,
    };
};

const transformRouterDataToListData = (
    dataArr: routerModel[]
): RouteListData[] => {
    return dataArr
        .map((data) => Transfrom(data, ''))
        .filter((data) => data != null) as RouteListData[];
};

const getAllActivingRoute = (
    routes: routerModel[],
    pathname: string
): string[] => {
    const result: string[] = [];
    const judgeActiving = (routePathname: string) => {
        return pathname.startsWith(routePathname);
    };
    const recursuveFn = (route: routerModel, baseUrl: string) => {
        const url = `${baseUrl}${route.path}`;
        if (judgeActiving(url)) {
            result.push(url);
            if (route.children) {
                route.children.forEach((r) => recursuveFn(r, url));
            }
        }
    };
    routes.forEach((r) => recursuveFn(r, ''));
    return result;
};

const RouterState = () => {
    const history = useHistory();
    const location = useLocation();

    const routerSidebarData = useMemo(() => {
        return transformRouterDataToListData(routerData);
    }, []);

    const selectedPath = useMemo(() => {
        return location.pathname;
    }, [location.pathname]);

    const [openKeys, setOpenKeys] = useState<string[]>(
        getAllActivingRoute(routerData, location.pathname)
    );
    const handleSelect = (
        data: RouteListData,
        _openKeys: string[],
        selectKey: string
    ) => {
        if (location.pathname !== selectKey) {
            if (!data.children) {
                history.push(selectKey);
            }
        }
        setOpenKeys(_openKeys);
    };

    return {
        routerSidebarData,
        handleSelect,
        selectedPath,
        openKeys,
    };
};

const RouterContainer = createContainer(RouterState);

export default RouterContainer;
