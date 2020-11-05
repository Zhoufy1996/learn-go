/** @format */

interface CategoryBase {
    description: string;
    title: string;
}

export interface Category extends CategoryBase {
    articles: null;
    id: number;
}

export interface CreateCategoryProps extends CategoryBase {}

export interface UpdateCategoryProps extends CategoryBase {
    id: number;
}
