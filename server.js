/*global require*/
/*global console*/
// --------------- Dependencias
var express = require('express');
var index = require('./routes/index');
var mongoose = require('mongoose');
//var session = require('express-session');
//var secret = require('./security.cfg');
// Aplicacion
var app = express();
// --------------- Middlewares
/*app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));*/
mongoose.connect('mongodb://localhost/servicios');
app.use(express.static('public'));
app.set('view engine', 'jade');

// --------------- Enrutadores
app.use('/', index);

// --------------- Servicios
app.listen(3000, function () {
  'use strict';
  console.log('Servidor iniciado en localhost:3000');
});
