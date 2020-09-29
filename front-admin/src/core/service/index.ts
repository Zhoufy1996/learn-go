/** @format */

import Axios from 'axios';
import { BASE_URL, TIMEOUT } from './constant';

const service = Axios.create({
    baseURL: BASE_URL || '',
    timeout: TIMEOUT || 1000,
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

interface Res {
    code: number;
    msg: string;
    data: object;
}

service.interceptors.response.use(
    (config) => {
        return config.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
