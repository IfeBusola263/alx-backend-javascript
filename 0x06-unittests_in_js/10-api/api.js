const express = require('express');
const app = express();
const host = 'localhost';
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id
    res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    const res_details = {
	payment_methods: {
	    credit_cards: true,
	    paypal: false
	}
    };
    res.status(200).json(res_details);
});

app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.status(200).send(`Welcome ${username}`);
});

app.listen(port, host, () => {
    console.log(`API available on ${host} port ${port}`);
});

module.exports = app;
