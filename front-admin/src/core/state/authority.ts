/** @format */

import { atom } from 'recoil';

const authorityState = atom({
    key: 'authority',
    default: false,
});

export default authorityState;
