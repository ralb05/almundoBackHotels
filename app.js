var express = require('express');
var app = express();
var db = require('./db');

var HotelController = require('./controllers/hotelController');
app.use('/', HotelController);

module.exports = app;