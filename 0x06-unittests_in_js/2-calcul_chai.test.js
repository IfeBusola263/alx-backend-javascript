const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./1-calcul');

describe('SUM', function () {
  it('Should add a and b if type is SUM', function () {
    expect(calculateNumber('SUM', -1.2, -3.3)).to.equal(-4);
    expect(calculateNumber('SUM', -5.8, -3.3)).to.equal(-9);
    expect(calculateNumber('SUM', -1.2, 3.3)).to.equal(2);
    expect(calculateNumber('SUM', 1.2, -3.3)).to.equal(-2);
    expect(calculateNumber('SUM', 11.2, 30.3)).to.equal(41);
    expect(calculateNumber('SUM', 11.2)).to.be.NaN;
  });
});

describe('SUBTRACT', function () {
  it('Should Subtract b from a if type  is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', -1.2, -3.3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -5.8, -3.3)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', -5.8, 3.3)).to.equal(-9);
    expect(calculateNumber('SUBTRACT', 5.8, -3.3)).to.equal(9);
    expect(calculateNumber('SUBTRACT', 5.8)).to.be.NaN;
  });
});

describe('DIVIDE', function () {
  it('Should divide a by b if type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', -1.2, -2.3)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -5.8, -3.3)).to.equal(2);
    expect(calculateNumber('DIVIDE', 0, -3.3)).to.equal(-0);
    expect(calculateNumber('DIVIDE', 15.2, 2.7)).to.equal(5);
    expect(calculateNumber('DIVIDE', -3.3)).to.be.NaN;
  });
});

describe('ERROR', function () {
  it("Should return 'Error' if type is DIVIDE and b rounds to 0", function () {
    expect(calculateNumber('DIVIDE', -1.2, -0.5)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -5.8, -0.3)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it('Should return NaN when no type is passed', function () {
    expect(calculateNumber(-1.2, -0.5)).to.be.undefined;
  });
});
