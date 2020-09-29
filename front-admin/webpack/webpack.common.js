/** @format */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const { resolve } = require('./utils');
const { rules } = require('./rules/index');

const devMode = process.env.NODE_ENV !== 'production';

const commonConfig = {
    context: resolve(),
    output: {
        filename: 'js/[name].[hash:12].js',
        path: resolve('dist'),
        publicPath: '/',
    },
    module: {
        rules,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            title: 'hello webpack',
            favicon: resolve('public/favicon.ico'),
            filename: 'demo.html',
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash:12].css',
            chunkFilename: devMode ? '[id].css' : 'css/[id].css',
        }),
        new AntdDayjsWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
};

module.exports = commonConfig;
