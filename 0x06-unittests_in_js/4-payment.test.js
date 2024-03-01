const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils')

const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi with Stubs', function () {
    it('should check that the Stubbed calculateNumber returns mocked value', function () {
	const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
	const spy = sinon.spy(console, 'log');
	sendPaymentRequestToApi(100, 20);
	expect(stub.calledWith('SUM', 100, 20)).to.be.true;
	expect(spy.calledWith("The total is: 10")).to.be.true;
	spy.restore();
	stub.restore();
    });
});
