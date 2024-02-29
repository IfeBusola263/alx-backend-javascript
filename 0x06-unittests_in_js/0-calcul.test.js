const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should return the addition of the rounded values of the args', function () {
	assert.strictEqual(calculateNumber(3, 4), 7);
	assert.strictEqual(calculateNumber(3.5, 4.2), 9);
	assert.strictEqual(calculateNumber(2.0, 4.9), 7);
	assert.strictEqual(calculateNumber(-3.5, 7.2), 5);
	assert.strictEqual(calculateNumber(0, -20.9), -20);
    });
});
	
