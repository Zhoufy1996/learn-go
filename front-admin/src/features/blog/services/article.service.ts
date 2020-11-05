/** @format */

import service from '../../../core/service';
import { Article } from '../models/article.model';

const baseUrl = '/article';

const getAllArticles = (): Promise<Article[]> => {
    return service.get(`${baseUrl}/all`);
};

const getArticleById = (id: number): Promise<Article> => {
    return service.get(`${baseUrl}/id/${id}`);
};

const getArticleCount = (): Promise<number> => {
    return service.get(`${baseUrl}/count`);
};

const addArticle = () => {};

const updateArticle = () => {};

const deleteArticle = (id: number): Promise<void> => {
    return service.delete(`${baseUrl}/delete/${id}`);
};

const tagService = {
    getAllArticles,
    getArticleById,
    getArticleCount,
    addArticle,
    updateArticle,
    deleteArticle,
};

export default tagService;
