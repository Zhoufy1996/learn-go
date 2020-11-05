/** @format */

import { lazy } from 'react';
/** @format */

import { routerModel } from '../../core/models/router.model';

const homeRoutes: routerModel = {
    path: '/home',
    name: '主页',
    component: lazy(() => import('./index')),
    showInSiderbar: true,
};

export default homeRoutes;
