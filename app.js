var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Calls the scheduler
require('./scheduler/CoingeckoScheduler');
require('dotenv').config();

let notionRoute = require('./routes/notion');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1/notion', notionRoute);

module.exports = app;
