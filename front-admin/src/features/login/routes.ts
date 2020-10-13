/** @format */

import { lazy } from 'react';
import { routerModel } from '../../core/models/router.model';

const loginRoutes: routerModel = {
    path: '/login',
    name: 'login',
    component: lazy(() => import('./index')),
};

export default loginRoutes;
