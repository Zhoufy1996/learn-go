/** @format */

const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const commonConfig = require('./webpack.common');
const { resolve } = require('./utils');

const prodConfig = {
    entry: {
        app: resolve('src/main.prod.tsx'),
    },
    devtool: 'hidden-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerPort: 8888,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
