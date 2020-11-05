/** @format */

import { useCallback, useState } from 'react';

import { createContainer } from 'unstated-next';
import sortNoService from '../../../core/service/sortno';
import { CreateTagProps, Tag, UpdateTagProps } from '../models/tag.model';
import tagService from '../services/tag.service';

const TABLENAME = 'tag';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [sortArr, setSortArr] = useState<string[]>([]);

    const getAllTags = useCallback(async () => {
        const [allTags, sortNos] = await Promise.all([
            tagService.getAllTags(),
            sortNoService.getSortNoByTableName(TABLENAME),
        ]);

        setSortArr(sortNos.map((n) => String(n)));
        setTags(allTags);
    }, []);

    const changeSort = useCallback(async (arr: string[]) => {
        const ids = arr.join(',');
        setSortArr(arr);
        await sortNoService.updateSortNoByTableName(TABLENAME, ids);
    }, []);

    const createTag = useCallback(
        async (tag: CreateTagProps) => {
            await tagService.createTag(tag);
            getAllTags();
        },
        [getAllTags]
    );

    const updateTag = useCallback(
        async (tag: UpdateTagProps) => {
            await tagService.updateTag(tag);
            getAllTags();
        },
        [getAllTags]
    );

    const deleteTag = useCallback(async (id: number) => {
        await tagService.deleteTag(id);
    }, []);

    return {
        tags,
        getAllTags,
        createTag,
        updateTag,
        deleteTag,

        sortArr,
        changeSort,
    };
});

export default TagContainer;
