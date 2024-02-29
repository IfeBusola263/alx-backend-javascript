const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe("calculateNumber", function () {
    it("Should add a and b if type is SUM", function () {
	assert.strictEqual(calculateNumber('SUM', -1.2, -3.3), -4);
	assert.strictEqual(calculateNumber('SUM', -5.8, -3.3), -9);
	assert.strictEqual(calculateNumber('SUM', -1.2, 3.3), 2);
	assert.strictEqual(calculateNumber('SUM', 1.2, -3.3), -2);
	assert.strictEqual(calculateNumber('SUM', 11.2, 30.3), 41);
    });

    it("Should Subtract b from a if type  is SUBTRACT", function () {
	assert.strictEqual(calculateNumber('SUBTRACT',-1.2, -3.3), 2);
	assert.strictEqual(calculateNumber('SUBTRACT',-5.8, -3.3), -3);
	assert.strictEqual(calculateNumber('SUBTRACT', -5.8, 3.3), -9);
	assert.strictEqual(calculateNumber('SUBTRACT', 5.8, -3.3), 9);
    });

    it("Should divide a by b if type is DIVIDE", function () {
	assert.strictEqual(calculateNumber('DIVIDE', -1.2, -2.3), 0.5);
	assert.strictEqual(calculateNumber('DIVIDE', -5.8, -3.3), 2);
	assert.strictEqual(calculateNumber('DIVIDE', 0, -3.3), -0);
	assert.strictEqual(calculateNumber('DIVIDE', 15.2, 2.7), 5);
    });

    it("Should return 'Error' if type is DIVIDE and b rounds to 0", function () {
	assert.strictEqual(calculateNumber('DIVIDE', -1.2, -0.5), 'Error');
	assert.strictEqual(calculateNumber('DIVIDE', -5.8, -0.3), 'Error');
	assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
});
