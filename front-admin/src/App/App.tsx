/** @format */
import React, { useMemo, useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { RouterComponent, routerData } from '../core/router/index';
import { Store, containers } from '../core/state/index';
import AuthorityContainer from '../core/state/authority';
import './style.css';
import '../shared/assets/styles/index.scss';

const theme = createMuiTheme();

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

    const Component = useMemo(() => {
        if (hasInit) {
            return <RouterComponent routerData={routerData} />;
        }
        return null;
    }, [hasInit]);
    return Component;
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Store containers={containers}>
                <HashRouter>
                    <AppComponent />
                </HashRouter>
            </Store>
        </ThemeProvider>
    );
};

export default App;
