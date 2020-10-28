/** @format */

import { useCallback, useState } from 'react';

import { createContainer } from 'unstated-next';
import sortNoService from '../../../core/service/sortno';
import {
    Category,
    CreateCategoryProps,
    UpdateCategoryProps,
} from '../models/category.model';
import categoryService from '../services/category.service';

const TABLENAME = 'category';

const CategoryContainer = createContainer(() => {
    const [categorys, setCategorys] = useState<Category[]>([]);
    const [sortArr, setSortArr] = useState<string[]>([]);

    const getAllCategorys = useCallback(async () => {
        const [allCategorys, sortNos] = await Promise.all([
            categoryService.getAllCategorys(),
            sortNoService.getSortNoByTableName(TABLENAME),
        ]);

        setSortArr(sortNos.map((n) => String(n)));
        setCategorys(allCategorys);
    }, []);

    const changeSort = useCallback(async (arr: string[]) => {
        const ids = arr.join(',');
        setSortArr(arr);
        await sortNoService.updateSortNoByTableName(TABLENAME, ids);
    }, []);

    const createCategory = useCallback(
        async (category: CreateCategoryProps) => {
            await categoryService.createCategory(category);
            getAllCategorys();
        },
        [getAllCategorys]
    );

    const updateCategory = useCallback(
        async (category: UpdateCategoryProps) => {
            await categoryService.updateCategory(category);
            getAllCategorys();
        },
        [getAllCategorys]
    );

    const deleteCategory = useCallback(
        async (id: number) => {
            await categoryService.deleteCategory(id);
            getAllCategorys();
        },
        [getAllCategorys]
    );

    return {
        categorys,
        getAllCategorys,
        createCategory,
        updateCategory,
        deleteCategory,

        sortArr,
        changeSort,
    };
});

export default CategoryContainer;
