/** @format */

import { useCallback, useEffect, useMemo, useState } from 'react';

import { createContainer } from 'unstated-next';
import sortNoService from '../../../core/service/sortno';
import { SortNoMap, Tag } from '../models/tag.model';
import tagService from '../services/tag.service';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [sortArr, setSortArr] = useState<string[]>([]);

    const getAllTags = useCallback(async () => {
        const allTags: Tag[] = await tagService.getAllTags();
        const sortNos: number[] = await sortNoService.getSortNoByTableName(
            'tag'
        );
        const sortNoMaploc: SortNoMap = {};
        sortNos.forEach((n, i) => {
            sortNoMaploc[n] = i;
        });

        setSortArr(sortNos.map((n) => String(n)));

        setTags(allTags);
    }, []);

    const changeSort = useCallback(async (arr: string[]) => {
        const ids = arr.join(',');
        setSortArr(arr);
        await sortNoService.updateSortNoByTableName('tag', ids);
    }, []);

    return {
        tags,
        getAllTags,
        changeSort,
        sortArr,
    };
});

export default TagContainer;
