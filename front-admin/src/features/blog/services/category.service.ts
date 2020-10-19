/** @format */

import service from '../../../core/service';
import { Category } from '../models/category.model';

const baseUrl = '/category';

const getAllCategorys = (): Promise<Category[]> => {
    return service.get(`${baseUrl}/all`);
};

const getCategoryById = (id: number): Promise<Category> => {
    return service.get(`${baseUrl}/id/${id}`);
};

const getCategoryCount = (): Promise<number> => {
    return service.get(`${baseUrl}/count`);
};

const addCategory = () => {};

const updateCategory = () => {};

const deleteCategory = (id: number): Promise<void> => {
    return service.delete(`${baseUrl}/delete/${id}`);
};

const tagService = {
    getAllCategorys,
    getCategoryById,
    getCategoryCount,
    addCategory,
    updateCategory,
    deleteCategory,
};

export default tagService;
