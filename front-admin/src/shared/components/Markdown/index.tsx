/** @format */
import React, { useCallback, useEffect, useRef } from 'react';
import * as CodeMirror from 'codemirror';

import { CustomMarkdownProps } from './model';

const editorOption = { tabSize: 2, lineNumbers: true, mode: 'markdown' };

const CustomMarkdown = ({ value, onChange }: CustomMarkdownProps) => {
    const textAreaInstance = useRef<HTMLTextAreaElement>(null);

    const cm = useRef<CodeMirror.EditorFromTextArea | null>(null);

    useEffect(() => {
        if (textAreaInstance.current) {
            cm.current = CodeMirror.fromTextArea(
                textAreaInstance.current,
                editorOption
            );
        }
    }, []);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange(e.target.value);
        },
        [onChange]
    );

    return (
        <div>
            <textarea
                value={value}
                onChange={handleChange}
                ref={textAreaInstance}
            />
        </div>
    );
};

export default CustomMarkdown;
