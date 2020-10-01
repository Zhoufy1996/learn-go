/** @format */

import { router } from '..';

const routerInit = () => {
    router.addRouter([
        {
            name: '重定向',
            path: 'redirect1',
            redirect: {
                from: '*',
                to: '/blog',
            },
        },
    ]);
};

export default routerInit;
