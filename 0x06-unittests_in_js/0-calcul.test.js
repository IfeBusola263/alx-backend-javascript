const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should round 3 and 4 to give 7', function () {
	assert.strictEqual(calculateNumber(3, 4), 7);
    });

    it('should round 3.5 and 4.2 to give 9', function () {
	assert.strictEqual(calculateNumber(3.5, 4.2), 9);
    });
    it('should round 2.0 and 4.9 to give 7', function () {
	assert.strictEqual(calculateNumber(2.0, 4.9), 7);
    });

    it('should round -3.5 and -7.2 to give 5', function () {
	assert.strictEqual(calculateNumber(-3.5, 7.2), 5);
    });

    it('should round 0 and -20.9 to give -20', function () {
	assert.strictEqual(calculateNumber(0, -20.9), -20);
    });
});
	
