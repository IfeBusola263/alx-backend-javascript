const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('Should add a and b if type is SUM', function () {
    expect(calculateNumber(-1.2, -3.3, 'SUM')).to.equal(-4);
    expect(calculateNumber(-5.8, -3.3, 'SUM')).to.equal(-9);
    expect(calculateNumber(-1.2, 3.3, 'SUM')).to.equal(2);
    expect(calculateNumber(1.2, -3.3, 'SUM')).to.equal(-2);
    expect(calculateNumber(11.2, 30.3, 'SUM')).to.equal(41);
  });

  it('Should Subtract b from a if type  is SUBTRACT', function () {
    expect(calculateNumber(-1.2, -3.3, 'SUBTRACT')).to.equal(2);
    expect(calculateNumber(-5.8, -3.3, 'SUBTRACT')).to.equal(-3);
    expect(calculateNumber(-5.8, 3.3, 'SUBTRACT')).to.equal(-9);
    expect(calculateNumber(5.8, -3.3, 'SUBTRACT')).to.equal(9);
  });

  it('Should divide a by b if type is DIVIDE', function () {
    expect(calculateNumber(-1.2, -2.3, 'DIVIDE')).to.equal(0.5);
    expect(calculateNumber(-5.8, -3.3, 'DIVIDE')).to.equal(2);
    expect(calculateNumber(0, -3.3, 'DIVIDE')).to.equal(-0);
    expect(calculateNumber(15.2, 2.7, 'DIVIDE')).to.equal(5);
  });

  it("Should return 'Error' if type is DIVIDE and b rounds to 0", function () {
    expect(calculateNumber(-1.2, -0.5, 'DIVIDE')).to.equal('Error');
    expect(calculateNumber(-5.8, -0.3, 'DIVIDE')).to.equal('Error');
    expect(calculateNumber(0, 0, 'DIVIDE')).to.equal('Error');
  });
});
