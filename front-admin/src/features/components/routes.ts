/** @format */

import { lazy } from 'react';
/** @format */

import { routerModel } from '../../core/models/router.model';

const componentRoutes: routerModel = {
    path: '/component',
    name: '组件',
    children: [
        {
            path: '/nestlist',
            name: '嵌套列表',
            component: lazy(() => import('./NestedList')),
            showInSiderbar: true,
        },
        {
            path: '/drag',
            name: '拖动',
            component: lazy(() => import('./drag/index')),
            showInSiderbar: true,
        },
    ],
    showInSiderbar: true,
};

export default componentRoutes;
