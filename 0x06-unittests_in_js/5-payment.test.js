const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');
const chai = require('chai');
const expect = chai.expect;

let spyConsole;

describe("sendPaymentRequestToAPI", function () {
    beforeEach(function () {
	spyConsole = sinon.spy(console, 'log');
    });
    afterEach(function () {
	spyConsole.restore();
    });

    it('should verify that console displays "The total is: 120" and is called once', function () {
	sendPaymentRequestToAPI(100, 20);
	expect(spyConsole.calledOnceWith("The total is: 120"));
    });

    it('should verify that console displays "The total is: 20" and is called once', function () {
	sendPaymentRequestToAPI(10, 10);
	expect(spyConsole.calledOnceWith("The total is: 20"));
    });
});
