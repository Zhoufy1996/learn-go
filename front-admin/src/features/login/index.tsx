/** @format */

import React from 'react';

import AuthorityContainer from '../../core/state/authority';

const LoginView = () => {
    const { login } = AuthorityContainer.useContainer();
    const onFinish = (values: LoginModel) => {
        login(values);
    };
    return <div>login</div>;
};

export default LoginView;
