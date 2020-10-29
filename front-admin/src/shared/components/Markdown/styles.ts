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
            flexBasis: 22,
            backgroundColor: 'gray',
            backgroundClip: 'content-box',
            cursor: 'move',
            paddingLeft: 10,
            paddingRight: 10,
        },
        read: {
            height: '100%',
            flex: 1,
            overflow: 'auto',
        },
    };
});

export default useStyle;
