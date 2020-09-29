/** @format */

import service from '.';

const baseUrl = 'authority';

const login = (values: LoginModel) => {
    return service.post(`${baseUrl}/login`, values);
};

const logout = () => {
    return service.post('', {});
};

const verifyToken = () => {
    return service.post('', {});
};

const authorityService = {
    login,
    logout,
    verifyToken,
};

export default authorityService;
