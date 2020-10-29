/** @format */
import React, { useRef } from 'react';
import CustomMarkdown from '../../shared/components/Markdown';

const MarkdownDemo = () => {
    const [value, setValue] = React.useState('');
    return <CustomMarkdown defaultValue={value} onChange={setValue} />;
};

export default MarkdownDemo;
