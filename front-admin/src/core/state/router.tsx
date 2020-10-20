/** @format */

import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { createContainer } from 'unstated-next';
import { ListData } from '../../shared/components/NestedList';
import { routerModel } from '../models/router.model';
import { routerData } from '../router';

const Transfrom = (
    data: routerModel,
    _baseUrl: string,
    recordIndex: number[]
): ListData => {
    const match = useRouteMatch(`${_baseUrl}${data.path}`);
    return {
        component: <span>{data.name}</span>,
        key: data.path,
        children:
            data.children == null
                ? null
                : data.children.map((d, index) =>
                      Transfrom(d, `${_baseUrl}${d.path}`, [
                          ...recordIndex,
                          index,
                      ])
                  ),
        isOpen: match != null,
        onClick: (row) => {
            window.console.log(row);
        },
        recordIndex,
    };
};

const closeOne = (data: ListData): ListData => {
    return {
        ...data,
        isOpen: false,
        children: data.children ? data.children.map(closeOne) : undefined,
    };
};

const openOne = (data: ListData): ListData => {
    return {
        ...data,
        isOpen: true,
    };
};

const updateArrByRecord = (
    allData: ListData[],
    data: ListData,
    fn: (data: ListData) => ListData
) => {
    const { recordIndex } = data;

    const update = (
        record: ListData,
        depth: number,
        index: number
    ): ListData => {
        if (
            depth === recordIndex.length &&
            index === recordIndex[recordIndex.length - 1]
        ) {
            return fn(record);
        }

        if (record.children) {
            return {
                ...record,
                children: record.children.map((item, i) =>
                    update(item, depth + 1, i)
                ),
            };
        }

        return record;
    };

    return allData.map((item, i) => update(item, 0, i));
};

const transformRouterDataToListData = (dataArr: routerModel[]): ListData[] => {
    return dataArr.map((data, index) => Transfrom(data, '', [index]));
};

const RouterState = () => {
    const [routerSidebarData, setRouterSideBarData] = useState<ListData[]>(
        transformRouterDataToListData(routerData)
    );

    const close = (data: ListData) => {
        const newData = updateArrByRecord(routerSidebarData, data, closeOne);
        setRouterSideBarData(newData);
    };

    const open = (data: ListData) => {
        const newData = updateArrByRecord(routerSidebarData, data, openOne);
        setRouterSideBarData(newData);
    };

    const onClick = (data: ListData) => {
        if (data.isOpen) {
            close(data);
        } else {
            open(data);
        }
    };

    return {
        routerSidebarData,
        close,
        open,
    };
};

const RouterContainer = createContainer(RouterState);

export default RouterContainer;
