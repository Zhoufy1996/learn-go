/** @format */
import React from 'react';
import CustomMarkdown from '../../shared/components/Markdown';

const MarkdownDemo = () => {
    const [value, setValue] = React.useState('**Hello world!!!**');

    return <CustomMarkdown value={value} onChange={setValue} />;
};

export default MarkdownDemo;
