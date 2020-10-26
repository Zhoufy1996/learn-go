/** @format */

import { useCallback, useEffect, useMemo, useState } from 'react';

import { createContainer } from 'unstated-next';
import sortNoService from '../../../core/service/sortno';
import { SortNoMap, Tag } from '../models/tag.model';
import tagService from '../services/tag.service';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [sortMap, setSortMap] = useState<SortNoMap>({});
    const [dragTag, setDragTag] = useState<Tag | null>(null);
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
        setSortMap(sortNoMaploc);
    }, []);

    const changeSort = useCallback(async (map: SortNoMap) => {
        setSortMap(map);
        const ids = Object.entries<number>(map as ArrayLike<number>)
            .sort((l, r) => l[1] - r[1])
            .map((s) => s[0])
            .join(',');
        await sortNoService.updateSortNoByTableName('tag', ids);
    }, []);

    const tagsShow = useMemo(() => {
        const sortTags = tags
            .map((tag) => {
                return {
                    ...tag,
                    sortNo: sortMap[tag.id],
                };
            })
            .sort((l, r) => l.sortNo - r.sortNo);
        return sortTags;
    }, [sortMap, tags]);

    return {
        tags,
        tagsShow,
        getAllTags,
        changeSort,
        sortMap,
        dragTag,
        setDragTag,
        sortArr,
    };
});

export default TagContainer;
