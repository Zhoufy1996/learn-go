/** @format */

import { router } from '../../core';
import loginRoutes from './routes';

const loginInit = () => {
    router.addRouter([loginRoutes]);
};

export default loginInit;
