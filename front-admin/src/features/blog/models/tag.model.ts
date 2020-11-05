/** @format */

import { Article } from './article.model';

interface TagBase {
    description: string;
    title: string;
}

export interface Tag extends TagBase {
    id: number;
    articles: Article[] | null;
}

export interface CreateTagProps extends TagBase {}

export interface UpdateTagProps extends TagBase {
    id: number;
}
