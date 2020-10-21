/** @format */

import { Tag } from './tag.model';

export interface Article {
    body: string;
    categoryId: number;
    createdAt: string;
    deletedAt: { Time: string; Valid: boolean };
    description: string;
    id: number;
    subTitle: string;
    tags: Tag[];
    title: string;
    updateAt: string;
    userId: number;
    sortNo: number;
}
