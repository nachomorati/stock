/*global require*/
/*global module*/
var express = require('express');
var router = express.Router();

router.route('/')
  .get(function (peticion, respuesta) {
    'use strict';
    //console.log('SESSION: '+ peticion.session.user_id);
    respuesta.render('index', {
      titulo: 'Gestion de Stock'
    });
  });

router.route('/login')
  .get(function (peticion, respuesta) {
    'use strict';
    respuesta.render('login', {
      titulo: 'Autenticar'
    });
  });

router.route('/signin')
  .get(function (peticion, respuesta) {
    'use strict';
    respuesta.render('signin', {
      titulo: 'Registro'
    });
  });

module.exports = router;
