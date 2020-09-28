/** @format */

import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import authorityService from '../../core/service/authority';
import authorityState from '../../core/state/authority';

const LoginView = () => {
    const setAuthority = useSetRecoilState(authorityState);
    const login = useCallback(() => {
        return async () => {
            await authorityService.login();
            setAuthority(() => true);
        };
    }, [setAuthority]);
    return <div>123</div>;
};

export default LoginView;
