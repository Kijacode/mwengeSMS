const express = require('express');
const bodyParser = require('body-parser'); //TODO: not reuquired
const sms = require('./routes/test/test');

const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use('/sms', sms);

module.exports = app;
