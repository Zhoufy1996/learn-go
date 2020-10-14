/** @format */

import { useState } from 'react';
/** @format */

import { createContainer } from 'unstated-next';
import { Tag } from '../models/tag.model';
import tagService from '../services/tag.service';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<Tag[]>([]);

    const getAllTags = async () => {
        const allTags: Tag[] = await tagService.getAllTags();
        setTags(allTags);
    };
    return {
        tags,
        getAllTags,
    };
});

export default TagContainer;
