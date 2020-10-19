/** @format */
import React, { useEffect } from 'react';
import ArticleContainer from './states/article.state';
import CategoryContainer from './states/category.state';
import TagContainer from './states/tag.state';

export const BlogContainers = [
    TagContainer,
    CategoryContainer,
    ArticleContainer,
];

const BlogView = () => {
    const { getAllTags } = TagContainer.useContainer();
    const { getAllCategorys } = CategoryContainer.useContainer();
    const { getAllArticles } = ArticleContainer.useContainer();
    useEffect(() => {
        getAllTags();
        getAllCategorys();
        getAllArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div>123</div>;
};

export default BlogView;
