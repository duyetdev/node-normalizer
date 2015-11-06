'use strict';

var _ = require('lodash');

var utils = require('./utils');
var replacer = utils.replacer;

// Model list
var teencode = require('../model/teencode.json');

var conversionTable = _.merge({}, teencode);

// Accepts a list of tokens to expand.
var Normalize = function(tokens) {
	var results = tokens;

	return results.replace(/[^\s]+/g, function(s, key) {
		return conversionTable[s] || s;
	});

	return results;
};

module.exports = Normalize;