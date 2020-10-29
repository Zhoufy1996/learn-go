/** @format */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as CodeMirror from 'codemirror';
import './codemirror.css';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';

import { CustomMarkdownProps } from './model';
import CustomDivide from './divide';
import useStyle from './styles';
import useRect from '../../hooks/useRect';

const editorOption = {
    tabSize: 2,
    lineNumbers: true,
    mode: 'markdown',
    theme: 'default',
};

/**
 * todos
 * 1. 工具栏
 * 2. 拖动优化
 * 3. 样式调整
 * 4. 同屏滚动
 */

const CustomMarkdown = ({ defaultValue, onChange }: CustomMarkdownProps) => {
    const classes = useStyle();

    const textAreaInstance = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState(defaultValue);

    const cm = useRef<CodeMirror.EditorFromTextArea | null>(null);
    const handleChange = useCallback(
        (instance: CodeMirror.Editor, changeObj: CodeMirror.EditorChange) => {
            setValue(instance.getValue());
            onChange(instance.getValue());
        },
        [onChange]
    );
    useEffect(() => {
        if (textAreaInstance.current) {
            cm.current = CodeMirror.fromTextArea(textAreaInstance.current, {
                ...editorOption,
            });
            cm.current.on('change', handleChange);
            return () => {
                if (cm.current != null) {
                    cm.current.off('change', handleChange);
                }
            };
        }
        return () => {};
    }, [handleChange]);

    useEffect(() => {
        const id = setInterval(() => {
            if (cm.current) {
                cm.current.setValue(defaultValue);
                clearInterval(id);
            }
        }, 200);
        return () => {
            clearInterval(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const rootRef = useRef<HTMLDivElement>(null);
    const { width } = useRect(rootRef);

    const [writeWidth, setWriteWidth] = useState<number>(0);

    useEffect(() => {
        if (writeWidth === 0) {
            setWriteWidth(Math.max(0, (width - 5) / 2));
        }
    }, [width, writeWidth, setWriteWidth]);

    const onMove = useCallback((offsetX, offsetY) => {
        window.console.log(offsetX);
        setWriteWidth((pre) => {
            return pre + offsetX;
        });
    }, []);
    return (
        <div className={classes.root} ref={rootRef}>
            <div className={classes.write} style={{ width: writeWidth }}>
                <textarea ref={textAreaInstance} />
            </div>
            <CustomDivide onMove={onMove} className={classes.divide} />
            <div className={classes.read}>
                <article className="markdown-body">
                    <ReactMarkdown>{value}</ReactMarkdown>
                </article>
            </div>
        </div>
    );
};

export default CustomMarkdown;
