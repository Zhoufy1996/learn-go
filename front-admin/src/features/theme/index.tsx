/** @format */
import React from 'react';
import ReactJson from 'react-json-view';

import { useTheme } from '@material-ui/core';
import customConsole from '../../shared/utils/console';

const ThemeView = () => {
    const theme = useTheme();
    customConsole(theme.direction);
    return (
        <div style={{ padding: 30 }}>
            <ReactJson src={theme} />
        </div>
    );
};

export default ThemeView;
