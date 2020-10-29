/** @format */
import React, { useRef } from 'react';
import faker from 'faker';
import CustomMarkdown from '../../shared/components/Markdown';

const MarkdownDemo = () => {
    const [value, setValue] = React.useState(faker.lorem.words(4));
    return <CustomMarkdown defaultValue={value} onChange={setValue} />;
};

export default MarkdownDemo;
