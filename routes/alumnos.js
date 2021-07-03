const express = require('express')
const router = express.Router()

/* Para llamar al controlador */
const alumnoController = require('../controllers/alumnoController')

/* GET ALL */
router.get('/', alumnoController.mostrar)

/* CREAR */
router.post('/crear', alumnoController.crear)

/* EDITAR ALUMNOS */
router.post('/editar', alumnoController.editar) //Usamos post para modificar los datos de nuestro Modal y con el controlador lo editamos

/* BORRAR ALUMNOS */
router.get('/borrar/:id', alumnoController.borrar) //Usamos GET para tomar los datos y mediante el controlador lo borramos






module.exports = router