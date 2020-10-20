/** @format */
import React, { useEffect } from 'react';
import SiderBar from '../../core/components/Sidebar';
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
    return <SiderBar />;
};

export default BlogView;
