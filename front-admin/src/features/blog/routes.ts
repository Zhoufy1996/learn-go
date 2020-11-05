/** @format */

import { lazy } from 'react';
import { routerModel } from '../../core/models/router.model';

const blogRoutes: routerModel = {
    path: '/blog',
    name: '博客',
    showInSiderbar: true,
    children: [
        {
            path: '/tag',
            name: '标签',
            component: lazy(() => import('./pages/tag/index')),
            showInSiderbar: true,
        },
        {
            path: '/category',
            name: '类别',
            component: lazy(() => import('./pages/category/index')),
            showInSiderbar: true,
        },
        {
            path: '/article',
            name: '文章',
            component: lazy(() => import('./pages/article/index')),
            showInSiderbar: true,
        },
    ],
};

export default blogRoutes;
