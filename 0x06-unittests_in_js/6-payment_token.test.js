const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');

describe('getPaymentTokenFromAPI(true)', function () {
    it('should test the output of the function', async function () {
	return new Promise((resolve, reject) => {

	    getPaymentTokenFromAPI(true)
		.then((resp) => {
		    assert.ok(resp);
		    expect(resp).to.deep.equal({data: 'Successful response from the API' });
		    expect(resp.data).to.be.equal('Successful response from the API');
		    resolve();
		}).catch(err => {reject(err)});
	});
    });

    it('should return undefined with the wrong input', function () {
	expect(getPaymentTokenFromAPI(false)).to.be.an('undefined');
    });
});
