/** @format */
const MarkdownLoader = require('markdown-loader');

const devMode = process.env.NODE_ENV !== 'production';

const fileRules = [];

if (devMode) {
    fileRules.push({
        test: /\.md$/,
        use: [
            {
                loader: 'html-loader',
            },
            {
                loader: 'markdown-loader',
                options: {
                    /* your options here */
                },
            },
        ],
    });
}

exports.fileRules = fileRules;
