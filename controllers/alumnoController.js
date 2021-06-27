const Alumno = require('../model/Alumno') //Traemos nuestro modelo

/* Definiendo Metodos */

/* Mostrar */
module.exports.mostrar =(req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if (error) {
            return res.status(500).json({
                menssage: 'Error al mostrar los Alumnos'
            })
        }
        return res.render('index', {alumnos: alumnos}) //Con esto devolvemos en el navegador nuestro index.ejs
    })
}