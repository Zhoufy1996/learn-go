/** @format */
import React, { useMemo, useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import 'dayjs/locale/zh-cn';

import './style.css';
import '../shared/assets/styles/index.scss';
import { router, store } from '../core';
import AuthorityContainer from '../core/state/authority';

const AppComponent = () => {
    const [hasInit, setHasInit] = useState<boolean>(false);

    const { verifyToken } = AuthorityContainer.useContainer();

    useEffect(() => {
        const init = async () => {
            try {
                await verifyToken();
            } finally {
                setHasInit(true);
            }
        };
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const RouterComponent = useMemo(() => {
        return router.getRouterComponent();
    }, []);

    const Component = useMemo(() => {
        if (hasInit) {
            return <RouterComponent />;
        }
        return null;
    }, [hasInit]);
    return Component;
};

const App = () => {
    const Providers = useMemo(() => {
        return store.getStoreComponent();
    }, []);

    return (
        <HashRouter>
            <Providers>
                <AppComponent />
            </Providers>
        </HashRouter>
    );
};

export default App;
