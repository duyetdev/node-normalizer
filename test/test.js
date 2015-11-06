var assert = require('assert');
var Normalizer = require('../index.js');

describe('Normalizer', function() {
	it ('should be replace teen code', function() {
		assert.equal("không biết", Normalizer("hem biết"));
	});
});