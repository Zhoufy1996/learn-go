/** @format */
import React, { useEffect } from 'react';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import TagContainer from '../../states/tag.state';
import useStyles from './style';

const TagView = () => {
    const classes = useStyles();

    const { getAllTags, tags } = TagContainer.useContainer();
    useEffect(() => {
        getAllTags();
    }, [getAllTags]);
    return (
        <div>
            <Grid container spacing={3}>
                {tags.map((tag) => {
                    return (
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography
                                    className={classes.title}
                                    variant="h4"
                                    component="h1"
                                >
                                    {tag.title}
                                </Typography>
                                <Divider />
                                <Typography
                                    className={classes.description}
                                    variant="body1"
                                >
                                    {tag.description}
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

export default TagView;
