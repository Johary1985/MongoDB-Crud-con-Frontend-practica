const express = require('express')
const router = express.Router()

/* Para llamar al controlador */
const alumnoController = require('../controllers/alumnoController')

/* GET */
router.get('/', alumnoController.mostrar)






module.exports = router