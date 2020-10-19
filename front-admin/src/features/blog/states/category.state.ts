/** @format */

import { useState } from 'react';

import { createContainer } from 'unstated-next';
import { Category } from '../models/category.model';
import categoryService from '../services/category.service';

const CategoryContainer = createContainer(() => {
    const [categorys, setCategorys] = useState<Category[]>([]);

    const getAllCategorys = async () => {
        const allCategorys: Category[] = await categoryService.getAllCategorys();
        setCategorys(allCategorys);
    };
    return {
        categorys,
        getAllCategorys,
    };
});

export default CategoryContainer;
