const express = require('express');
const app = express();
const host = 'localhost';
const port = 7865;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (!isNaN(Number(id))) {
	res.status(200).send(`Payment methods for cart ${id}`);
    } else {
	res.status(400).end();
    }
});

app.listen(port, host, () => {
    console.log(`API available on ${host} port ${port}`);
});

module.exports = app;
