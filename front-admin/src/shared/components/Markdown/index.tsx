/** @format */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button, makeStyles, Theme } from '@material-ui/core';
import Editor from 'draft-js-plugins-editor';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            backgroundColor: '#fff',
            height: '100%',
        },
    };
});

interface DProps {
    value: string;
    onChange: (v: string) => void;
}

const DraftDemo = ({ value, onChange }: DProps) => {
    const classes = useStyles();
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

    return (
        <div className={classes.root}>
            <Editor editorState={editorState} onChange={handleChange} />
            <ReactMarkdown>{value}</ReactMarkdown>
        </div>
    );
};

export default DraftDemo;
