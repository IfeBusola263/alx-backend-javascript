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

describe('GET /cart/:id', function () {
    it('should test the route for right param', function (done) {
	let id = 15;
	request.get(`http://localhost:7865/cart/${id}`, (err, res, body) => {
	    expect(res.statusCode).to.be.equal(200);
	    expect(res.body).to.be.equal(`Payment methods for cart ${id}`);
	    done();
	});

    });

    it('should test the route for wrong param', function (done) {
	request.get(`http://localhost:7865/cart/hello`, (err, res, body) => {
	    expect(res.statusCode).to.be.equal(400);
	    console.log(err);
	    done();
	});
    });
});
	
