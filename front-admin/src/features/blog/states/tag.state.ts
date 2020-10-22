/** @format */

import { useCallback, useState } from 'react';

import { createContainer } from 'unstated-next';
import { SortNoMap, Tag } from '../models/tag.model';
import tagService from '../services/tag.service';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<(Tag & { sortNo: number })[]>([]);

    const getAllTags = useCallback(async () => {
        const allTags: Tag[] = await tagService.getAllTags();
        const sortNos: number[] = [];
        const sortNoMaploc: SortNoMap = {};
        sortNos.forEach((n, i) => {
            sortNoMaploc[n] = i;
        });
        const sortTags = allTags
            .map((tag) => {
                return {
                    ...tag,
                    sortNo: sortNoMaploc[tag.id],
                };
            })
            .sort((l, r) => l.sortNo - r.sortNo);

        setTags(sortTags);
    }, []);

    const changeSort = (map: SortNoMap) => {
        const sortTags = tags.map((tag) => {
            return {
                ...tag,
                sortNo: map[tag.id],
            };
        });
        setTags(sortTags);
    };

    return {
        tags,
        getAllTags,
    };
});

export default TagContainer;
