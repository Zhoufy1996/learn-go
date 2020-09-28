/** @format */

const { resolve } = require('../utils');

const jsRules = [
    {
        test: /\.(j|t)s(x?)$/,
        use: [
            {
                loader: 'eslint-loader',
                options: {
                    // fix: true,
                    emitError: true,
                    emitWarning: true,
                },
            },
        ],
        enforce: 'pre',
        include: [resolve('src')],
    },
    {
        test: /\.(j|t)s(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
    },
];

exports.jsRules = jsRules;
