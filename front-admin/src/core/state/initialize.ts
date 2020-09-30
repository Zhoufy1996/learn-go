/** @format */

import { store } from '..';
import AuthorityContainer from './authority';

const stateInit = () => {
    store.addState([AuthorityContainer]);
};

export default stateInit;
