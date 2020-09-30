/** @format */

import Axios from 'axios';
import localToken from '../state/token';
import { BASE_URL, TIMEOUT } from './constant';

const service = Axios.create({
    baseURL: BASE_URL || '',
    timeout: TIMEOUT || 1000,
});

service.interceptors.request.use(
    (config) => {
        Object.assign(config.headers, { Authorization: localToken.get() });
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

interface Res {
    data: any;
    msg: string;
    code: number;
}

service.interceptors.response.use(
    (config) => {
        const { data, msg, code }: Res = config.data;
        return data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
