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
    return service.post('', {});
};

const verifyToken = () => {
    return service.post(`${baseUrl}/verifyToken`, {});
};

const authorityService = {
    login,
    logout,
    verifyToken,
};

export default authorityService;
