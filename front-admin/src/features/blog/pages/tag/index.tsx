/** @format */
import React, { useEffect } from 'react';
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TagContainer from '../../states/tag.state';
import useStyles from './style';
import TagPaper from './paper';

const TagView = () => {
    // const classes = useStyles();

    const { getAllTags, tagsShow } = TagContainer.useContainer();
    useEffect(() => {
        getAllTags();
    }, [getAllTags]);
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
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
            </div>
        </DndProvider>
    );
};

export default TagView;
