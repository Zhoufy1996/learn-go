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
    // const classes = useStyles();

    const { getAllTags, tagsShow } = TagContainer.useContainer();
    useEffect(() => {
        getAllTags();
    }, [getAllTags]);

    const render = useCallback((data: Tag) => {
        return null;
    }, []);
    return (
        <DndProvider backend={HTML5Backend}>
            <DragGrid
                dropDragItemProps={{
                    dragProps: {},
                    dropProps: {},
                }}
                data={tagsShow}
                type="tag"
                render={render}
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
