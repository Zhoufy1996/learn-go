/** @format */

const { cssRules } = require('./css');
const { jsRules } = require('./js');
const { fileRules } = require('./file');

const rules = [...cssRules, ...jsRules, ...fileRules];

exports.rules = rules;
