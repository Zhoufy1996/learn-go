/** @format */

import { lazy } from 'react';
import { routerModel } from '../../../model/router.model';

const reactRoutes: routerModel = {
    path: '/react',
    name: 'react',
    children: [
        {
            path: '/xss',
            name: 'xss攻击',
            component: lazy(() => import('./xss.demo')),
        },
        {
            path: '/tick',
            name: '计时器',
            component: lazy(() => import('./update.react')),
        },
        {
            path: '/arrow-fn',
            name: '创建新参数作为props导致重复渲染',
            component: lazy(() => import('./repeatUpdate.react')),
        },
        {
            path: '/context',
            name: 'context示例',
            component: lazy(() => import('./context.react')),
        },
        {
            path: '/error',
            name: '错误边界',
            component: lazy(() => import('./error.react')),
        },
        {
            path: '/ref',
            name: 'ref',
            component: lazy(() => import('./ref.react')),
        },
        {
            path: '/hoc',
            name: 'hoc',
            component: lazy(() => import('./hoc.react')),
        },
        {
            path: '/portals',
            name: 'portals',
            component: lazy(() => import('./portals.react')),
        },
        {
            path: '/profiler',
            name: 'profiler',
            component: lazy(() => import('./profiler.react')),
        },
        {
            path: '/render-props',
            name: 'render-props',
            component: lazy(() => import('./renderProps.react')),
        },
        {
            path: '/effect',
            name: 'effect',
            component: lazy(() => import('./effect.react')),
        },
        {
            path: '/customHook',
            name: 'customHook',
            component: lazy(() => import('./customHook.react')),
        },
    ],
};

export default reactRoutes;
