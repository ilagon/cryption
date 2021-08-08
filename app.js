var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
let cryptoRouter = require('./routes/coingecko');
let notionRoute = require('./routes/notion');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/test', cryptoRouter);
app.use('/v1/notion', notionRoute);

module.exports = app;
