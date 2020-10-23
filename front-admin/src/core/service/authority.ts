/** @format */

import service from '.';

const baseUrl = '/authority';

interface LoginRes {
    token: string;
}

const login = (values: LoginModel): Promise<LoginRes> => {
    return service.post(`${baseUrl}/login`, values);
};

const logout = (): Promise<void> => {
    return service.post('/logout');
};

const verifyToken = (): Promise<void> => {
    return service.post(`${baseUrl}/verifytoken`);
};

const authorityService = {
    login,
    logout,
    verifyToken,
};

export default authorityService;
