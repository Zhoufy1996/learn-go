/** @format */

import { store } from '..';
import AuthorityContainer from './authority';
import TokenContainer from './token';

const stateInit = () => {
    store.addState([AuthorityContainer, TokenContainer]);
};

export default stateInit;
