/** @format */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';

import { CustomMarkdownProps } from './model';
import CustomDivide from './divide';
import useStyle from './styles';
import useRect from '../../hooks/useRect';
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
