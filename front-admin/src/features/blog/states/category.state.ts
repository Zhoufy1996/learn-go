/** @format */

import { useCallback, useState } from 'react';

import { createContainer } from 'unstated-next';
import { Category } from '../models/category.model';
import categoryService from '../services/category.service';

const CategoryContainer = createContainer(() => {
    const [categorys, setCategorys] = useState<Category[]>([]);

    const getAllCategorys = useCallback(async () => {
        const allCategorys: Category[] = await categoryService.getAllCategorys();
        setCategorys(allCategorys.sort((l, r) => l.sortNo - r.sortNo));
    }, []);
    return {
        categorys,
        getAllCategorys,
    };
});

export default CategoryContainer;
