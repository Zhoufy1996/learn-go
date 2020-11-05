/** @format */
import React, { useEffect } from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core';
import ArticleContainer from '../../states/article.state';

const ArticleView = () => {
    const { articles, getAllArticles } = ArticleContainer.useContainer();
    useEffect(() => {
        getAllArticles();
    }, [getAllArticles]);
    return (
        <div>
            {articles.map((article) => {
                return (
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {article.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                view
                            </Button>
                            <Button size="small" color="primary">
                                edit
                            </Button>
                            <Button size="small" color="primary">
                                delete
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
};

export default ArticleView;
