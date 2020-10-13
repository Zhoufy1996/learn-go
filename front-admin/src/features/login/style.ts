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
    textField: {},
}));

export default useStyles;
