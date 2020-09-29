/** @format */

import loginInit from './features/login/initialize';
import blogInit from './features/blog/initialize';
import stateInit from './core/state/initialize';

const init = () => {
    stateInit();

    loginInit();
    blogInit();
};

export default init;
