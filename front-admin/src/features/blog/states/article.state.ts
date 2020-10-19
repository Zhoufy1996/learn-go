/** @format */

import { useState } from 'react';

import { createContainer } from 'unstated-next';
import { Article } from '../models/article.model';
import articleService from '../services/article.service';

const ArticleContainer = createContainer(() => {
    const [articles, setArticles] = useState<Article[]>([]);

    const getAllArticles = async () => {
        const allArticles: Article[] = await articleService.getAllArticles();
        setArticles(allArticles);
    };
    return {
        articles,
        getAllArticles,
    };
});

export default ArticleContainer;
