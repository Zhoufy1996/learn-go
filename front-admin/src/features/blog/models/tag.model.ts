/** @format */

export interface Tag {
    articles: null;
    createdAt: string;
    deletedAt: { Time: string; Valid: boolean };
    description: string;
    id: number;
    title: string;
    updateAt: string;
    sortNo: number;
}

/**
 * id: sortNo
 */
export interface SortNoMap {
    [id: number]: number;
}
