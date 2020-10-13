/** @format */
import { lazy } from 'react';
import { routerModel } from '../../core/models/router.model';

const themeRoutes: routerModel = {
    path: '/theme',
    name: 'theme',
    component: lazy(() => import('./index')),
};

export default themeRoutes;
