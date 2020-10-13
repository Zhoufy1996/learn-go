/** @format */
import React, { useCallback, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';

import AuthorityContainer from '../../core/state/authority';
import commonStyles from '../../shared/assets/styles';
import useStyles from './style';

const LoginView = () => {
    const classes = useStyles();

    const commonClasses = commonStyles();

    const { login } = AuthorityContainer.useContainer();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onClick = () => {
        login({ username, password });
    };

    const handleChangeUsername = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            return setUsername(e.target.value);
        },
        []
    );

    const handleChangePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            return setPassword(e.target.value);
        },
        []
    );

    return (
        <main
            className={`${commonClasses.childrenCentered} ${commonClasses.root}`}
        >
            <Paper className={classes.peper}>
                <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                >
                    登录
                </Typography>
                <form>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="bb-username"
                        label="username"
                        required
                        autoComplete="bb-username"
                        autoFocus
                        value={username}
                        onChange={handleChangeUsername}
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="bb-password"
                        type="password"
                        label="passoword"
                        required
                        autoComplete="bb-password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={onClick}
                    >
                        Sign In
                    </Button>
                </form>
            </Paper>
        </main>
    );
};

export default LoginView;
