/** @format */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('../utils');

const devMode = process.env.NODE_ENV !== 'production';

const miniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: devMode,
        publicPath: './',
        reloadAll: true,
    },
};

const cssModuleLoader = {
    loader: '@teamsupercell/typings-for-css-modules-loader',
};

const cssLoader = {
    loader: 'css-loader',
};

const scssLoader = {
    loader: 'sass-loader',
};

const cssRules = [
    {
        test: /\.css$/,
        use: [miniCssLoader, cssLoader],
    },
    {
        test: /\.scss$/,
        use: [
            miniCssLoader,
            cssModuleLoader,
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
            scssLoader,
        ],
        include: [resolve('src')],
        exclude: [resolve('node_modules'), resolve('src/shared')],
    },
    {
        test: /\.scss$/,
        use: [miniCssLoader, cssLoader, scssLoader],
        include: [resolve('src/shared'), resolve('node_modules')],
    },
];

exports.cssRules = cssRules;
