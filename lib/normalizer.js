'use strict';

var utils = require('./utils');
var replacer = utils.replacer;

var conversionTable = {
	"can't": "can not",
	"won't": "will not",
	"couldn't've": "could not have",
	"i'm": "I am",
	"how'd": "how did"
};

var rules = [{
	regex: /([azAZ]*)n\'[tT]/g,
	output: "$1 not"
}, {
	regex: /([azAZ]*)\'[sS]/g,
	output: "$1 is"
}, {
	regex: /([azAZ]*)\'[lL][lL]/g,
	output: "$1 will"
}, {
	regex: /([azAZ]*)\'[rR][eE]/g,
	output: "$1 are"
}, {
	regex: /([azAZ]*)\'[vV][eE]/g,
	output: "$1 have"
}, {
	regex: /([azAZ]*)\'[dD]/g,
	output: "$1 would"
}];

// Accepts a list of tokens to expand.
var Normalize = function(tokens) {
	if (typeof tokens === "string") {
		tokens = [tokens];
	}
	var results = [];
	var rule_count = rules.length;
	var num_tokens = tokens.length;
	var i, token, r, rule;

	for (i = 0; i < num_tokens; i++) {
		token = tokens[i];
		// Check the conversion table
		if (conversionTable[token.toLowerCase()]) {
			results = results.concat(conversionTable[token.toLowerCase()].split(/\W+/));
		}

		// Apply the rules
		else {
			var matched = false;
			for (r = 0; r < rule_count; r++) {
				rule = rules[r];
				if (token.match(rule.regex)) {
					results = results.concat(token.replace(rule.regex, rule.output).split(/\W+/));
					matched = true;
					break;
				}
			}
			if (!matched) {
				results.push(token);
			}
		}
	}

	return results;
};

module.exports = Normalize;