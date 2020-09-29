/** @format */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const commonConfig = require('./webpack.common');

const { resolve } = require('./utils');

const devConfig = {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            resolve('src/main.dev.tsx'),
        ],
    },
    devtool: 'eval-source-map',
    mode: 'development',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 8888,
        // }),
    ],
};

module.exports = merge(commonConfig, devConfig);
