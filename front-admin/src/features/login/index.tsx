/** @format */

import React from 'react';
import { Form, Input, Button } from 'antd';

import AuthorityContainer from '../../core/state/authority';

const LoginView = () => {
    const { login } = AuthorityContainer.useContainer();
    const onFinish = (values: LoginModel) => {
        login(values);
    };
    return (
        <div>
            <Form name="login" scrollToFirstError onFinish={onFinish}>
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder="账号" />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input placeholder="密码" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginView;
