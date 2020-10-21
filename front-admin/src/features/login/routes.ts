/** @format */

import { lazy } from 'react';
import { routerModel } from '../../core/models/router.model';

const loginRoutes: routerModel = {
    path: '/login',
    name: 'login',
    component: lazy(() => import('./index')),
    showInSiderbar: false,
};

export default loginRoutes;
