/** @format */

import { lazy } from 'react';
import { routerModel } from '../../model/router.model';

const componentDemoRoutes: routerModel = {
    path: '/component',
    name: '组件',
    children: [
        {
            path: '/virtualList',
            name: '虚拟列表',
            component: lazy(() => import('./virtualList.demo')),
        },
        {
            path: '/item',
            name: 'DOM回调',
            component: lazy(() => import('./item.demo')),
        },
    ],
};

export default componentDemoRoutes;
