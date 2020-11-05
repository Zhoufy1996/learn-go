/** @format */

import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
    return {
        paper: {
            flexGrow: 1,
            height: 200,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        },
        title: {
            textAlign: 'center',
            flexGrow: 0,
            flexShrink: 0,
        },
        description: {
            flexGrow: 1,
        },
        footer: {
            flexGrow: 0,
            flexShrink: 0,
        },
    };
});

export default useStyles;
