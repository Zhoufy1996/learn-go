/** @format */
import React, { ReactNode, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routerModel } from '../../model/router.model';
import router from '../router';

const transformRouter = (_router: routerModel[]): ReactNode[] => {
    const transSingle = (_route: routerModel, _baseUrl: string): any => {
        if (_route.children) {
            return _route.children.map((route) => {
                return transSingle(route, `${_baseUrl}${_route.path}`);
            });
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

const Router = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Switch>{transformRouter(router)}</Switch>
        </Suspense>
    );
};

export default Router;
