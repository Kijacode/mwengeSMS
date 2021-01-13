const express = require('express');
const sms = require('./routes/test/test');

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(express.json());

app.use('/sms', sms);

module.exports = app;
