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
	    expect(res.statusCode).to.be.equal(404);
	    done();
	});
    });
});

describe('GET /available_payments', function () {
    it('should return a json object and do a deep comparison', function (done) {
	request.get('http://localhost:7865/available_payments', (err, res, body) => {
	    expect(res.statusCode).to.be.equal(200);
	    expect(JSON.parse(body)).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
	    done();
	});
    });
});

describe('POST /login', function () {
    it('should return a welcome message with the userName value of the data', function(done) {
	const data = { userName: "Busola" };
	request.post('http://localhost:7865/login', data, (err, res, body) => {
	    expect(res.statusCode).to.be.equal(200);
	    expect(body).to.be.equal(`Welcome ${data.username}`);
	    done();
	});
    });
});
