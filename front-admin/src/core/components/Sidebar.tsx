/** @format */
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { router } from '../index';
import { routerModel } from '../../shared/router/router.model';
import NestedList, { ListData } from './List';

const Sidebar = () => {
    const TransSingle = (_route: routerModel, _baseUrl: string): ListData => {
        const history = useHistory();
        const match = useRouteMatch(`${_baseUrl}${_route.path}`);
        const isMatch = match != null;
        if (_route.children) {
            return {
                component: <span>{_route.name}</span>,
                key: _route.path,
                children: _route.children.map((route) => {
                    return TransSingle(route, `${_baseUrl}${_route.path}`);
                }),
                isOpen: isMatch,
                onClick: () => {},
            };
        }

        return {
            component: (
                <span
                    key={_route.path}
                    style={{
                        textDecoration: 'none',
                        color: isMatch ? 'red' : '',
                    }}
                >
                    {_route.name}
                </span>
            ),
            key: _route.path,
            isOpen: isMatch,
            onClick: () => {
                history.push(`${_baseUrl}${_route.path}`);
            },
        };
    };
    const data = router.getRouterData().map((item) => {
        return TransSingle(item, '');
    });
    return <NestedList data={data} listTag="nav" depth={0} />;
};

export default Sidebar;
