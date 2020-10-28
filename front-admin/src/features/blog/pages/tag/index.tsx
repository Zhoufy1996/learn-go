/** @format */
import React, { useCallback, useEffect } from 'react';
import { Button, Divider, Paper, Typography } from '@material-ui/core';

import TagContainer from '../../states/tag.state';
import useStyles from './style';
import DragGrid from '../../../../shared/components/DragGrid/DragGrid';
import { Tag } from '../../models/tag.model';

const TagView = () => {
    const classes = useStyles();

    const {
        getAllTags,
        tags,
        sortArr,
        changeSort,
    } = TagContainer.useContainer();
    useEffect(() => {
        getAllTags();
    }, [getAllTags]);

    const render = useCallback(
        (tag: Tag, isDragging: boolean) => {
            return (
                <Paper
                    style={{ opacity: isDragging ? 0.5 : 1 }}
                    className={classes.paper}
                >
                    <Typography
                        className={classes.title}
                        variant="h4"
                        component="h1"
                    >
                        {tag.title}
                    </Typography>
                    <Divider />
                    <Typography className={classes.description} variant="body1">
                        {tag.description}
                    </Typography>
                    <div className={classes.footer}>
                        <Button>编辑</Button>
                        <Button>删除</Button>
                    </div>
                </Paper>
            );
        },
        [classes]
    );

    return (
        <DragGrid<Tag>
            dataSource={tags}
            type="tag"
            getKey={(data) => data.id}
            render={render}
            sortKeys={sortArr}
            onChange={changeSort}
        />
    );
};

export default TagView;
