/** @format */

import { useCallback, useState } from 'react';

import { createContainer } from 'unstated-next';
import { Tag } from '../models/tag.model';
import tagService from '../services/tag.service';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<Tag[]>([]);

    const getAllTags = useCallback(async () => {
        const allTags: Tag[] = await tagService.getAllTags();
        setTags(allTags.sort((l, r) => l.sortNo - r.sortNo));
    }, []);
    return {
        tags,
        getAllTags,
    };
});

export default TagContainer;
