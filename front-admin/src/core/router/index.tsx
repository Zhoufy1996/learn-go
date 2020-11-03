/** @format */
import React, { ReactNode, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loginRoutes from '../../features/login/routes';
import blogRoutes from '../../features/blog/routes';
import { routerModel } from '../models/router.model';
import themeRoutes from '../../features/theme/routes';
import homeRoutes from '../../features/home/routes';
import componentRoutes from '../../features/components/routes';

const transformRouter = (_router: routerModel[]): ReactNode[] => {
    const transSingle = (_route: routerModel, _baseUrl: string): any => {
        if (_route.children) {
            return _route.children.map((route) => {
                return transSingle(route, `${_baseUrl}${_route.path}`);
            });
        }

        if (_route.redirect) {
            return (
                <Redirect
                    key={_route.path}
                    from={`${_baseUrl}${_route.redirect.from}`}
                    to={_route.redirect.to}
                />
            );
        }

        return (
            <Route
                component={_route.component}
                exact
                key={_route.path}
                path={`${_baseUrl}${_route.path}`}
            />
        );
    };
    const result = _router.map((item) => transSingle(item, ''));
    return result;
};

interface RouterComponentProps {
    routerData: routerModel[];
}

export const RouterComponent = ({ routerData }: RouterComponentProps) => {
    return (
        <Suspense fallback={<div>组件加载中</div>}>
            <Switch>{transformRouter(routerData)}</Switch>
        </Suspense>
    );
};

export const routerData: routerModel[] = [
    homeRoutes,
    loginRoutes,
    blogRoutes,
    themeRoutes,
    componentRoutes,
    {
        name: '重定向',
        path: 'redirect1',
        redirect: {
            from: '*',
            to: '/home',
        },
        showInSiderbar: false,
    },
];
