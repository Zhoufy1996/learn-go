/** @format */

import loginInit from './features/login/initialize';
import blogInit from './features/blog/initialize';
import stateInit from './core/state/initialize';
import routerInit from './core/router/initialize';

const init = () => {
    stateInit();

    loginInit();
    blogInit();

    routerInit();
};

export default init;
