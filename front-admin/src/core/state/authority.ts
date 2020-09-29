/** @format */
import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authorityService from '../service/authority';

const useAuthority = () => {
    const [isLogin, setisLogin] = useState<boolean>(false);

    const history = useHistory();

    const verifyToken = async () => {
        try {
            await authorityService.verifyToken();
            setisLogin(true);
        } catch (e) {
            setisLogin(false);
        }
    };

    const login = async (values: LoginModel) => {
        await authorityService.login(values);
        setisLogin(true);
    };

    const logout = () => {
        setisLogin(false);
        history.push('/login');
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
