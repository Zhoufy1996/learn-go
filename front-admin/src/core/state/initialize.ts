/** @format */

import { store } from '..';
import AuthorityContainer from './authority';
import TagContainer from './tag';

const stateInit = () => {
    store.addState([AuthorityContainer, TagContainer]);
};

export default stateInit;
