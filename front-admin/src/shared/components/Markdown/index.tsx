/** @format */
import React, { useCallback, useEffect, useRef } from 'react';
import * as CodeMirror from 'codemirror';
import { CustomMarkdownProps } from './model';
import 'codemirror/lib/codemirror.css';

const editorOption = {
    tabSize: 2,
    lineNumbers: true,
    mode: 'markdown',
    theme: 'default',
};

const CustomMarkdown = ({ value, onChange }: CustomMarkdownProps) => {
    const textAreaInstance = useRef<HTMLTextAreaElement>(null);

    const cm = useRef<CodeMirror.EditorFromTextArea | null>(null);

    useEffect(() => {
        if (textAreaInstance.current) {
            cm.current = CodeMirror.fromTextArea(textAreaInstance.current, {
                ...editorOption,
            });
        }
    }, []);

    useEffect(() => {
        if (cm.current) {
            cm.current.setValue(value);
        }
    }, [value]);
    window.console.log(value);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            window.console.log(e.target.value);
            onChange(e.target.value);
        },
        [onChange]
    );

    return (
        <div>
            <textarea ref={textAreaInstance} />
        </div>
    );
};

export default CustomMarkdown;
