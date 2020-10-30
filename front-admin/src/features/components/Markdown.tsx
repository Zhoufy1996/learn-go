/** @format */
import React, { useRef } from 'react';
import CustomMarkdown from '../../shared/components/Markdown/index';

const MarkdownDemo = () => {
    const [value, setValue] = React.useState('');
    return <CustomMarkdown value={value} onChange={setValue} />;
};

export default MarkdownDemo;
