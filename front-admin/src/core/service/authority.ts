/** @format */

import service from '.';

const baseUrl = 'authority';

interface LoginRes {
    token: string;
}

const login = (values: LoginModel): Promise<LoginRes> => {
    return service.post(`${baseUrl}/login`, values);
};

const logout = () => {
    return service.post('/logout');
};

const verifyToken = () => {
    return service.post(`${baseUrl}/verifytoken`, {});
};

const authorityService = {
    login,
    logout,
    verifyToken,
};

export default authorityService;
