const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should round 2.0 and 4.9 to give -7', function () {
	assert.strictEqual(calculateNumber(-2.0, -4.9), -7);
    });

    it('should round -3.5 and -7.2 to give -10', function () {
	assert.strictEqual(calculateNumber(-3.5, -7.2), -10);
    });

    it('should round 3 and 4 to give 1', function () {
	assert.strictEqual(calculateNumber(-3, 4), 1);
    });

    it('should round 3.5 and 4.2 to give 8', function () {
	assert.strictEqual(calculateNumber(3.5, 4.2), 8);
    });

    it('should round 0 and -20.9 to give -21', function () {
	assert.strictEqual(calculateNumber(0, -20.9), -21);
    });
});
