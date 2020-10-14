/** @format */

import service from '../../../core/service';
import { Tag } from '../models/tag.model';

const baseUrl = '/tag';

const getAllTags = (): Promise<Tag[]> => {
    return service.get(`${baseUrl}/all`);
};

const getTagById = (id: number): Promise<Tag> => {
    return service.get(`${baseUrl}/id/${id}`);
};

const getTagCount = (): Promise<number> => {
    return service.get(`${baseUrl}/count`);
};

const addTag = () => {};

const updateTag = () => {};

const deleteTag = (id: number): Promise<void> => {
    return service.delete(`${baseUrl}/delete/${id}`);
};

const tagService = {
    getAllTags,
    getTagById,
    getTagCount,
    addTag,
    updateTag,
    deleteTag,
};

export default tagService;
