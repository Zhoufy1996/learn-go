/** @format */

import { router } from '../../core';
import blogRoutes from './routes';

const blogInit = () => {
    router.addRouter([blogRoutes]);
};

export default blogInit;
