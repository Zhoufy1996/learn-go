/** @format */

import React from 'react';
import Button from '@material-ui/core/Button';
import { Theme, createStyles } from '@material-ui/core';

const styles = ({ palette }: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: palette.background.default,
            color: palette.primary.main,
        },
    });

const HelloMaterial = () => {
    return (
        <Button variant="contained" color="primary">
            你好，世界
        </Button>
    );
};

export default HelloMaterial;
