var express = require('express');
var index = require('./routes/index');
//var session = require('express-session');
//var secret = require('./security.cfg');
// Aplicacion
var app = express();
// Middlewares
/*app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));*/

app.set('view engine', 'jade');

// Enrutadores
app.use('/', index);

// Servicios
app.listen(3000, function () {
  console.log('Servidor iniciado en localhost:3000');
});
