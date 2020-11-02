/** @format */
import React, { useRef } from 'react';
import * as faker from 'faker';

import { range } from '../../shared/utils/range';
import CustomMarkdown from '../../shared/components/Markdown/index';

const getDefaultValue = () => {
    return range(0, 100)
        .map(() => faker.lorem.text())
        .join('\n');
};

const MarkdownDemo = () => {
    const [value, setValue] = React.useState(getDefaultValue());
    return <CustomMarkdown value={value} onChange={setValue} />;
};

export default MarkdownDemo;
