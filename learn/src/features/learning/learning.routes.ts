/** @format */

import { routerModel } from '../../model/router.model';
import reactRoutes from './react/react.routes';
import materialRoutes from './material/material.routes';

const learningRoutes: routerModel = {
    path: '/learning',
    name: 'learning',
    children: [reactRoutes, materialRoutes],
};

export default learningRoutes;
