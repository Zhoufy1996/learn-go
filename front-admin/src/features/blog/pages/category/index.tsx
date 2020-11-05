/** @format */
import React, { useEffect } from 'react';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import CategoryContainer from '../../states/category.state';
import useStyles from './style';

const CategoryView = () => {
    const classes = useStyles();

    const { getAllCategorys, categorys } = CategoryContainer.useContainer();
    useEffect(() => {
        getAllCategorys();
    }, [getAllCategorys]);
    return (
        <div>
            <Grid container spacing={3}>
                {categorys.map((category) => {
                    return (
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography
                                    className={classes.title}
                                    variant="h4"
                                    component="h1"
                                >
                                    {category.title}
                                </Typography>
                                <Divider />
                                <Typography
                                    className={classes.description}
                                    variant="body1"
                                >
                                    {category.description}
                                </Typography>
                                <div className={classes.footer}>
                                    <Button>编辑</Button>
                                    <Button>删除</Button>
                                </div>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default CategoryView;
