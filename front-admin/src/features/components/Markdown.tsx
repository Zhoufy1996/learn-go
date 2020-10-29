/** @format */
import React, { useRef } from 'react';
import CustomMarkdown from '../../shared/components/Markdown';

const MarkdownDemo = () => {
    const [value, setValue] = React.useState('**Hello world!!!**');
    const ref = useRef(null);
    return <CustomMarkdown defaultValue={value} onChange={setValue} />;
};

export default MarkdownDemo;
