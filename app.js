const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sms = require('./routes/test/test');;
app.use(bodyParser.json());



app.use(express.json());
app.use('/sms', sms);


module.exports = app;