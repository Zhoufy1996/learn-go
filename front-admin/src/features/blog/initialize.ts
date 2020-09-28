/** @format */

import { router } from '../../core';
import blogRoutes from './routes';

const loginInit = () => {
    router.addRouter([blogRoutes]);
};

export default loginInit;
