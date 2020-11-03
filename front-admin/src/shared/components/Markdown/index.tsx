/** @format */
import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
    EditorState,
    RichUtils,
    convertToRaw,
    convertFromRaw,
    Editor,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
// import Editor from 'draft-js-plugins-editor';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import ReactMarkdown from 'react-markdown';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import useStyle from './styles';
import useMove from './useMove';
import useRect from '../../hooks/useRect';
import useSyncScroll from './useSyncScroll';

interface DProps {
    value: string;
    onChange: (v: string) => void;
}

/**
 * 1. 样式
 * 2. 同步滚动 按比例
 */
const DraftDemo = ({ value, onChange }: DProps) => {
    const classes = useStyle();
    const [editorState, setEditorState] = useState<EditorState>(() =>
        EditorState.createWithContent(convertFromRaw(markdownToDraft(value)))
    );

    const handleChange = useCallback(
        (newEditorState: EditorState) => {
            // Convert draftjs state to markdown
            setEditorState(newEditorState);

            const content = newEditorState.getCurrentContent();
            const rawObject = convertToRaw(content);
            const markdownString = draftToMarkdown(rawObject);
            onChange(markdownString);
        },
        [onChange]
    );

    const rootRef = useRef<HTMLDivElement>(null);
    const { width } = useRect(rootRef);
    const [writeWidth, setWriteWidth] = useState<number>(0);

    useEffect(() => {
        if (writeWidth === 0) {
            setWriteWidth(Math.max(0, (width - 5) / 2));
        }
    }, [width, writeWidth, setWriteWidth]);

    const onMove = useCallback((offsetX) => {
        setWriteWidth((pre) => {
            return pre + offsetX;
        });
    }, []);

    const { startMove, move, endMove } = useMove(onMove);
    const { ref1, ref2 } = useSyncScroll<HTMLDivElement>();
    window.console.log(value);
    return (
        <div
            onMouseUp={endMove}
            onMouseLeave={endMove}
            className={classes.root}
            ref={rootRef}
            onMouseMove={move}
        >
            <div className={classes.write}>
                <div className={classes.text}>
                    <SimpleBar
                        scrollableNodeProps={{ ref: ref1 }}
                        style={{ height: '100%', width: writeWidth }}
                    >
                        <Editor
                            editorState={editorState}
                            onChange={handleChange}
                        />
                    </SimpleBar>
                </div>
            </div>
            <div onMouseDown={startMove} className={classes.divide} />

            <div className={classes.read}>
                <SimpleBar
                    scrollableNodeProps={{ ref: ref2 }}
                    style={{ height: '100%' }}
                >
                    <ReactMarkdown>{value}</ReactMarkdown>
                </SimpleBar>
            </div>
        </div>
    );
};

export default DraftDemo;
