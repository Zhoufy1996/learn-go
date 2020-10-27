/** @format */
import React, { useCallback, useEffect } from 'react';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TagContainer from '../../states/tag.state';
import useStyles from './style';
import TagPaper from './paper';
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
        <DndProvider backend={HTML5Backend}>
            <DragGrid<Tag>
                dataSource={tags}
                type="tag"
                getKey={(data) => data.id}
                render={render}
                sortKeys={sortArr}
                onChange={changeSort}
            />
        </DndProvider>
    );
};

/* <div>
                <Grid container spacing={1}>
                    {tagsShow.map((tag) => {
                        return (
                            <TagPaper
                                key={`${tag.id}/${tag.sortNo}`}
                                tag={tag}
                            />
                        );
                    })}
                </Grid>
            </div> */

export default TagView;
