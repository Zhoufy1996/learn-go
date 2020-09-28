/** @format */

import { lazy } from 'react';
import { routerModel } from '../../../model/router.model';

const materialRoutes: routerModel = {
    path: '/material',
    name: 'material',
    children: [
        {
            path: '/helloworld',
            name: 'helloworld',
            component: lazy(() => import('./helloworld.material')),
        },
    ],
};

export default materialRoutes;
