//Rutas para users
const express = require('express');
const router = express.Router();
const sesionsController = require('../controllers/sesionController')


// api/users
router.post('/',sesionsController.crearUsuario);
router.post('/:token',sesionsController.crearComponente);
router.get('/ayuda/:usuario',sesionsController.accederFuncionesAyuda);
router.get('/tiempo/:usuario',sesionsController.tiempoEntreComponentes);
/* router.put('/:token', sesionsController.cerrarGlobalSesion); */

module.exports = router;
