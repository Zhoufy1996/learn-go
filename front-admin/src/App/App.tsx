/** @format */
import React, { useMemo, useState, useEffect } from 'react';
import { HashRouter, useRouteMatch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { RouterComponent, routerData } from '../core/router/index';
import { Store, containers } from '../core/state/index';
import AuthorityContainer from '../core/state/authority';
import SiderBar from '../core/components/Sidebar';
import useStyles from './style';

const theme = createMuiTheme();

const AppComponent = () => {
    const [hasInit, setHasInit] = useState<boolean>(false);
    const isLoginView = useRouteMatch('/login');
    const { verifyToken } = AuthorityContainer.useContainer();
    const classes = useStyles();

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

    const element = useMemo(() => {
        if (hasInit) {
            return <RouterComponent routerData={routerData} />;
        }
        return null;
    }, [hasInit]);

    return (
        <>
            {isLoginView ? (
                element
            ) : (
                <div className={classes.root}>
                    <SiderBar />
                    <main className={classes.main}>{element}</main>
                </div>
            )}
        </>
    );
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <Store containers={containers}>
                    <AppComponent />
                </Store>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
