/** @format */

const { cssRules } = require('./css');
const { jsRules } = require('./js');

const rules = [...cssRules, ...jsRules];

exports.rules = rules;
