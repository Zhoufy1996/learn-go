/** @format */

export interface Tag {
    articles: null;
    createdAt: string;
    deletedAt: { Time: string; Valid: boolean };
    description: string;
    id: number;
    title: string;
    updateAt: string;
}

export interface ExchangeTag {
    id: number;
    sortNo: number;
}

export interface SortNoMap {
    [id: number]: number;
}
