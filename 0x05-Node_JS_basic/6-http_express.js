const express = require('express');

const host = 'localhost';
const port = 1245;
const app = express();

module.exports = app;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.listen(port, host);
