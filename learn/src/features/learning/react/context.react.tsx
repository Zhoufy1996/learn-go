/** @format */

import React, { useState, useContext } from 'react';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(themes.dark);

const ThemedButton = ({ onClick = () => {} }: { onClick: () => void }) => {
    const context = useContext(ThemeContext);
    const { background, foreground } = context;
    return (
        <button
            style={{
                background,
                color: foreground,
            }}
            type="button"
            onClick={onClick}
        >
            +
        </button>
    );
};

const ContextDemo = () => {
    const [theme, setTheme] = useState(themes.light);
    // eslint-disable-next-line no-console
    // console.log(theme);
    const changeTheme = () => {
        if (theme === themes.light) {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    };
    return (
        <ThemeContext.Provider value={theme}>
            <ThemedButton onClick={changeTheme} />
        </ThemeContext.Provider>
    );
};

export default ContextDemo;
