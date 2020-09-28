/** @format */
import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import './style.css';
import '../shared/assets/styles/index.scss';
import { router } from '../core';

const theme = createMuiTheme();

const routerComponent = router.getRouterComponent();

const App = () => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <CssBaseline />
                </HashRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default App;
