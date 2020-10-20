/** @format */
import React, { ReactNode, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import loginRoutes from '../../features/login/routes';
import blogRoutes from '../../features/blog/routes';
import { routerModel } from '../models/router.model';
import themeRoutes from '../../features/theme/routes';
import { range } from '../../shared/utils/range';

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
                    from={_route.redirect.from}
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
        <Suspense fallback={<div>loading</div>}>
            <Switch>{transformRouter(routerData)}</Switch>
        </Suspense>
    );
};

const testRouter = (): routerModel[] => {
    const rangeRouter = (
        start: number,
        end: number,
        depth: number
    ): routerModel[] => {
        return range(start, end).map((n) => {
            const name = `${start}/${end}/${n}/${depth}/${uuidv4()}`;
            const children =
                depth > 0 ? rangeRouter(start, end, depth - 1) : undefined;
            return {
                path: name,
                component: () => <div>{name}</div>,
                name,
                children,
            };
        });
    };
    return rangeRouter(1, 5, 4);
};

export const routerData: routerModel[] = [
    ...testRouter(),
    loginRoutes,
    blogRoutes,
    themeRoutes,
    {
        name: '重定向',
        path: 'redirect1',
        redirect: {
            from: '*',
            to: '/blog',
        },
    },
];
