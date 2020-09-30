/** @format */
import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authorityService from '../service/authority';
import localToken from './token';

const useAuthority = () => {
    const [isLogin, setisLogin] = useState<boolean>(false);

    const history = useHistory();

    const login = async (values: LoginModel) => {
        const res = await authorityService.login(values);
        localToken.update(res.token);
        setisLogin(true);
    };

    const logout = () => {
        setisLogin(false);
        history.push('/login');
    };

    const verifyToken = async () => {
        try {
            await authorityService.verifyToken();
            setisLogin(true);
        } catch (e) {
            logout();
        }
    };

    return {
        isLogin,
        login,
        logout,
        verifyToken,
    };
};

const AuthorityContainer = createContainer(useAuthority);

export default AuthorityContainer;
