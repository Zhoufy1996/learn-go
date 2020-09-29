/** @format */

import { store } from '..';
import AuthorityContainer from './authority';
import TokenContainer from './useToken';

/** @format */
const stateInit = () => {
    store.addState([AuthorityContainer, TokenContainer]);
};

export default stateInit;
