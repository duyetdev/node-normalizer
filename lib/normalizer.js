'use strict';

var utils = require('./utils');
var replacer = utils.replacer;

var conversionTable = {
	"can't": "can not",
	"won't": "will not",
	"couldn't've": "could not have",
	"i'm": "I am",
	"how'd": "how did",
	"k": "không",
	"hem": "không"
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
	var results = tokens;

	return results.replace(/[a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+/g, function(s, key) {
		return conversionTable[s] || s;
	});

	return results;
};

module.exports = Normalize;