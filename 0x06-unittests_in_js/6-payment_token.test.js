const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');

describe('getPaymentTokenFromAPI(true)', function () {
    it('should test the output of the function', async function () {
	return new Promise((resolve) => {

	    getPaymentTokenFromAPI(true)
		.then(data => {
		    assert.ok(data);
		    expect(data).to.deep.equal({data: 'Successful response from the API' });
		});
	    resolve();
	});
    });

    it('should return undefined with the wrong input', function () {
	expect(getPaymentTokenFromAPI(false)).to.be.an('undefined');
    });
});
