/* Conectando con nuestra BD */
const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_alumnos'

/* Metodos traidos del site https://www.npmjs.com/package/mongoose para conectar a mongoose con la BD */
mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
 useCreateIndex: true
})

/* Constante para asignar la conexion y eventos en caso de error o exito */
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar'))
db.once('open', function callback(){
    console.log("Estamos conectados a MongoDB")
})

/* Para exportar la DB */
module.exports = db