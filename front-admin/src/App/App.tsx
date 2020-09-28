/** @format */
import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import './style.css';
import '../shared/assets/styles/index.scss';

import ResponsiveDrawer from '../core/components/Drawer';
import Sidebar from '../core/components/Sidebar';
import Router from '../core/components/Router';

const theme = createMuiTheme();

const App = () => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <CssBaseline />
                    <ResponsiveDrawer
                        ToolbarChildren={() => null}
                        DrawerChildren={Sidebar}
                        MainChildren={Router}
                    />
                </HashRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default App;
