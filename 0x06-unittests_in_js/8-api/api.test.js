const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', function () {
    it('returns a text/plain response', function (done) {
	request.get('http://localhost:7865', (err, response,body) => {
	    expect(response.statusCode).to.be.equal(200);
	    expect(response.body).to.be.equal('Welcome to the payment system');
	    done();
	});
    });
});
