/** @format */

import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            display: 'flex',
        },
        sidebar: {
            flexBasis: 300,
        },
        main: {
            flex: 1,
        },
    };
});

export default useStyles;
