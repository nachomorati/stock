/*global require*/
/*global module*/
var express = require('express');
var router = express.Router();

router.route('/')
  .get(function (peticion, respuesta) {
    'use strict';
    console.log('SESSION: '+ peticion.session.user_id);
    respuesta.send('Inicio');
  });

module.exports = router;
