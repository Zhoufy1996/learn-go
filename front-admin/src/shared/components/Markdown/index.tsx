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
import Toolbar from './toolbar';
import tools from './tools';
import useMove from './useMove';

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
    const handleViewPortChange = useCallback(
        (instance: CodeMirror.Editor, from: number, to: number) => {
            window.console.log(instance, from, to);
        },
        []
    );
    useEffect(() => {
        if (textAreaInstance.current) {
            cm.current = CodeMirror.fromTextArea(textAreaInstance.current, {
                ...editorOption,
            });
            cm.current.on('change', handleChange);
            cm.current.on('viewportChange', handleViewPortChange);
            return () => {
                if (cm.current != null) {
                    cm.current.off('change', handleChange);
                    cm.current.off('viewportChange', handleViewPortChange);
                }
            };
        }
        return () => {};
    }, [handleChange, handleViewPortChange]);

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
    const { width, height } = useRect(rootRef);

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

    const { startMove, move, endMove } = useMove(onMove);

    return (
        <div
            onMouseUp={endMove}
            onMouseLeave={endMove}
            className={classes.root}
            ref={rootRef}
            onMouseMove={move}
        >
            <div className={classes.write} style={{ width: writeWidth }}>
                <Toolbar tools={tools} />
                <div className={classes.text}>
                    <textarea ref={textAreaInstance} />
                </div>
            </div>
            <div onMouseDown={startMove} className={classes.divide} />
            <div className={classes.read}>
                <article className="markdown-body">
                    <ReactMarkdown>{value}</ReactMarkdown>
                </article>
            </div>
        </div>
    );
};

export default CustomMarkdown;
