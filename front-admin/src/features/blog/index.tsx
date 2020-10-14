/** @format */
import React, { useEffect } from 'react';
import TagContainer from './states/tag.state';

const BlogView = () => {
    const { getAllTags, tags } = TagContainer.useContainer();

    useEffect(() => {
        getAllTags();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    window.console.log(tags);
    return <div>123</div>;
};

export default BlogView;
