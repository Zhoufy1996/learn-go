/** @format */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.js');

const app = express();

const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
    })
);

app.use(require('webpack-hot-middleware')(compiler));

// Serve the files on port 3000.
app.listen(4042, () => {
    console.log('Example app listening on port 4042!\n');
});
