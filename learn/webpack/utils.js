/** @format */

const path = require('path');

const resolve = (...args) => path.join(__dirname, '../', ...args);

exports.resolve = resolve;
