/** @format */

import service from '.';

const login = () => {
    return service.post('', {});
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
