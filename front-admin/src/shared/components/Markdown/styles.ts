/** @format */

import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => {
    return {
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: '#fff',
        },
        write: {
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        },
        toolbar: {
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid black',
        },
        toolteam: {
            marginLight: 10,
            marginRight: 10,
            borderRight: '1px solid red',
        },
        icon: {
            cursor: 'pointer',
            marginLeft: 5,
            marginRight: 5,
        },
        text: {
            flex: 1,
            overflow: 'auto',
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
