const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe("calculateNumber", function () {
    it("Should add a and b if type is SUM", function () {
	assert.strictEqual(calculateNumber(-1.2, -3.3, 'SUM'), -4);
	assert.strictEqual(calculateNumber(-5.8, -3.3, 'SUM'), -9);
	assert.strictEqual(calculateNumber(-1.2, 3.3, 'SUM'), 2);
	assert.strictEqual(calculateNumber(1.2, -3.3, 'SUM'), -2);
	assert.strictEqual(calculateNumber(11.2, 30.3, 'SUM'), 41);
    });

    it("Should Subtract b from a if type  is SUBTRACT", function () {
	assert.strictEqual(calculateNumber(-1.2, -3.3, 'SUBTRACT'), 2);
	assert.strictEqual(calculateNumber(-5.8, -3.3, 'SUBTRACT'), -3);
	assert.strictEqual(calculateNumber(-5.8, 3.3, 'SUBTRACT'), -9);
	assert.strictEqual(calculateNumber(5.8, -3.3, 'SUBTRACT'), 9);
    });

    it("Should divide a by b if type is DIVIDE", function () {
	assert.strictEqual(calculateNumber(-1.2, -2.3, 'DIVIDE'), 0.5);
	assert.strictEqual(calculateNumber(-5.8, -3.3, 'DIVIDE'), 2);
	assert.strictEqual(calculateNumber(0, -3.3, 'DIVIDE'), -0);
	assert.strictEqual(calculateNumber(15.2, 2.7, 'DIVIDE'), 5);
    });

    it("Should return 'Error' if type is DIVIDE and b rounds to 0", function () {
	assert.strictEqual(calculateNumber(-1.2, -0.5, 'DIVIDE'), 'Error');
	assert.strictEqual(calculateNumber(-5.8, -0.3, 'DIVIDE'), 'Error');
	assert.strictEqual(calculateNumber(0, 0, 'DIVIDE'), 'Error');
    });
});
