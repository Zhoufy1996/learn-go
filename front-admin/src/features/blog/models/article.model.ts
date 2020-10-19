/** @format */

export interface Article {
    body: string;
    categoryId: number;
    createdAt: string;
    deletedAt: { Time: string; Valid: boolean };
    description: string;
    id: number;
    subTitle: string;
    tags: null;
    title: string;
    updateAt: string;
    userId: number;
}
