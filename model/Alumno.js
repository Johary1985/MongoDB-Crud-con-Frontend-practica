const mongoose = require('mongoose')
const Schema = mongoose.Schema //Necesario crear la constante schema desde mongoose

/* Aqui creamos nuestro schema con el formato de nuestra BD */
const alumnosSchema = new Schema ({
    nombre: String,
    edad: Number
}, {verionKey:false}) //Con eso evitamos que sea creado ese campo

/* Exportamos nuestro modulo de schema */
module.exports = mongoose.model('alumnos', alumnosSchema)