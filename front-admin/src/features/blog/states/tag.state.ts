/** @format */

import { useCallback, useState } from 'react';

import { createContainer } from 'unstated-next';
import { ExchangeTag, Tag } from '../models/tag.model';
import tagService from '../services/tag.service';

const TagContainer = createContainer(() => {
    const [tags, setTags] = useState<Tag[]>([]);

    const getAllTags = useCallback(async () => {
        const allTags: Tag[] = await tagService.getAllTags();
        setTags(allTags.sort((l, r) => l.sortNo - r.sortNo));
    }, []);

    const exChangeTag = useCallback(
        async (tag1: ExchangeTag, tag2: ExchangeTag) => {
            const map = {
                [tag1.id]: tag2.sortNo,
                [tag2.id]: tag1.sortNo,
            };
            const newTags = tags.map((tag) => {
                if (map[tag.id]) {
                    return {
                        ...tag,
                        sortNo: map[tag.id],
                    };
                }
                return tag;
            });
            setTags(newTags);
        },
        [tags]
    );
    return {
        tags,
        getAllTags,
        exChangeTag,
    };
});

export default TagContainer;
