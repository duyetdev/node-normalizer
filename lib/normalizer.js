'use strict';

var _ = require('lodash');

var utils = require('./utils');

// Model list
var teencode = require('../model/teencode.json');

var conversionTable = _.merge({}, teencode);

// Accepts a list of tokens to expand.
var Normalize = function(tokens) {
	return tokens.replace(/[^\s]+/g, function(s, key) {
		return conversionTable[s] || s;
	});
};

module.exports = Normalize;
