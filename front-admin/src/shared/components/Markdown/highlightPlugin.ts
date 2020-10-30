/** @format */

import { RichUtils } from 'draft-js';

const highlightPlugin = () => {
    return {
        customStyleMap: {
            HIGHLIGHT: {
                background: 'blue',
                padding: '0.3em',
                color: '#fff',
            },
        },
        keyBindingFn: (e: any) => {
            if (e.metaKey && e.key === 'h') {
                return 'highlight';
            }
            return '';
        },
        handleKeyCommand: (
            command: any,
            editorState: any,
            { setEditorState }: any
        ) => {
            if (command === 'highlight') {
                setEditorState(
                    RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT')
                );
                return true;
            }
            return false;
        },
    };
};

export default highlightPlugin;
