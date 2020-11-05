/** @format */

import service from '../../../core/service';
import {
    Category,
    CreateCategoryProps,
    UpdateCategoryProps,
} from '../models/category.model';

const BASEURL = '/category';

const getAllCategorys = (): Promise<Category[]> => {
    return service.get(`${BASEURL}/all`);
};

const getCategoryById = (id: number): Promise<Category> => {
    return service.get(`${BASEURL}/id/${id}`);
};

const getCategoryCount = (): Promise<number> => {
    return service.get(`${BASEURL}/count`);
};

const createCategory = (category: CreateCategoryProps) => {
    return service.post(`${BASEURL}/update`, category);
};

const updateCategory = (category: UpdateCategoryProps) => {
    return service.put(`${BASEURL}/update`, category);
};

const deleteCategory = (id: number): Promise<void> => {
    return service.delete(`${BASEURL}/delete/${id}`);
};

const tagService = {
    getAllCategorys,
    getCategoryById,
    getCategoryCount,
    createCategory,
    updateCategory,
    deleteCategory,
};

export default tagService;
