/** @format */

import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => {
    return {
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
        },
        write: {
            height: '100%',
        },
        divide: {
            height: '100%',
            flexBasis: 5,
            background: 'black',
        },
        read: {
            height: '100%',
            flex: 1,
        },
    };
});

export default useStyle;
