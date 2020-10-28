/** @format */

import service from '../../../core/service';
import { CreateTagProps, Tag, UpdateTagProps } from '../models/tag.model';

const BASEURL = '/tag';

const getAllTags = (): Promise<Tag[]> => {
    return service.get(`${BASEURL}/all`);
};

const getTagById = (id: number): Promise<Tag> => {
    return service.get(`${BASEURL}/id/${id}`);
};

const getTagCount = (): Promise<number> => {
    return service.get(`${BASEURL}/count`);
};

const createTag = (tag: CreateTagProps): Promise<void> => {
    return service.post(`${BASEURL}/add`, tag);
};

const updateTag = (tag: UpdateTagProps): Promise<void> => {
    return service.put(`${BASEURL}/update`, tag);
};

const deleteTag = (id: number): Promise<void> => {
    return service.delete(`${BASEURL}/delete/${id}`);
};

const tagService = {
    getAllTags,
    getTagById,
    getTagCount,
    createTag,
    updateTag,
    deleteTag,
};

export default tagService;
