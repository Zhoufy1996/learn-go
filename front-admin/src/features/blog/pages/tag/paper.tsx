/** @format */

import React, { useCallback, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Paper, Typography, Divider, Button, Grid } from '@material-ui/core';
import { SortNoMap, Tag } from '../../models/tag.model';
import useStyles from './style';
import TagContainer from '../../states/tag.state';

interface DropContainerProps {
    children?: JSX.Element | null | JSX.Element[];
    ondrop: () => void;
    style?: React.CSSProperties;
}

const DropContainer = ({
    children = null,
    ondrop,
    style = {},
}: DropContainerProps) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'tag',
        drop: () => ondrop(),
        canDrop: () => true,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    return (
        <div
            ref={drop}
            style={{
                backgroundColor: isOver ? 'yellow' : 'white',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

interface TagPaperProps {
    tag: Tag;
}

const TagPaper = ({ tag }: TagPaperProps) => {
    const classes = useStyles();

    const {
        changeSort,
        sortMap,
        setDragTag,
        dragTag,
    } = TagContainer.useContainer();

    const [{ isDragging }, drag] = useDrag({
        item: { type: 'tag' },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    useEffect(() => {
        if (isDragging) {
            window.console.log('drap');
            setDragTag(tag);
        }
    }, [isDragging, tag, setDragTag]);

    const handleExchange = useCallback(() => {
        if (dragTag != null) {
            changeSort({
                ...sortMap,
                [dragTag.id]: sortMap[tag.id],
                [tag.id]: sortMap[dragTag.id],
            });
        }
    }, [sortMap, changeSort, dragTag, tag.id]);

    const handleSortAfter = useCallback(() => {
        if (dragTag != null) {
            const ids = Object.entries<number>(sortMap as ArrayLike<number>)
                .sort((l, r) => l[1] - r[1])
                .map((s) => Number(s[0]));
            const deleteIndex = ids.findIndex((id) => id === dragTag.id);

            ids.splice(deleteIndex, 1);

            const addIndex = ids.findIndex((id) => id === tag.id);
            ids.splice(addIndex + 1, 0, dragTag.id);
            const sortNoMaploc: SortNoMap = {};
            ids.forEach((n, i) => {
                sortNoMaploc[n] = i;
            });

            changeSort(sortNoMaploc);
        }
    }, [dragTag, changeSort, sortMap, tag.id]);

    return (
        <div className={classes.container}>
            <Grid item xs={3}>
                <Paper
                    style={{ opacity: isDragging ? 0.5 : 1 }}
                    className={classes.paper}
                    ref={drag}
                >
                    <DropContainer
                        style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        ondrop={handleExchange}
                    >
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
                    </DropContainer>
                </Paper>
            </Grid>
            <Grid item xs={1}>
                <DropContainer
                    style={{ height: '100%' }}
                    ondrop={handleSortAfter}
                />
            </Grid>
        </div>
    );
};

export default TagPaper;
