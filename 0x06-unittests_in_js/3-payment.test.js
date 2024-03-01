const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils')
// const calculateNumber = require('./utils').calculateNumber;
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
    it('should check that sendPaymentRequestToApi is called with "SUM" as type', function () {
	const spy = sinon.spy(Utils, 'calculateNumber');
	sendPaymentRequestToApi(100, 20);
	expect(spy.called).to.be.true;
	expect(spy.calledWith('SUM', 100, 20)).to.be.true;
	spy.restore();
    });
});
