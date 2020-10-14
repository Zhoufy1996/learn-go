/** @format */
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    peper: {
        width: 400,
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    title: {
        textAlign: 'center',
    },
    textField: {
        marginTop: 10,
    },
    button: {
        marginTop: 10,
    },
}));

export default useStyles;
