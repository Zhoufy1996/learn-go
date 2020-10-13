/** @format */

import { lazy } from 'react';
import { routerModel } from '../../core/models/router.model';

const blogRoutes: routerModel = {
    path: '/blog',
    name: 'blog',
    component: lazy(() => import('./index')),
};

export default blogRoutes;
