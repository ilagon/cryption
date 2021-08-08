var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

let cryptoRouter = require('./routes/coingecko');
let notionRoute = require('./routes/notion');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/test', cryptoRouter);
app.use('/v1/notion', notionRoute);

module.exports = app;
