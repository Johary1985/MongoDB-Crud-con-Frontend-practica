const Alumno = require('../model/Alumno') //Traemos nuestro modelo

/* Definiendo Metodos */

/* Mostrar */
module.exports.mostrar = (req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if (error) {
            return res.status(500).json({
                menssage: 'Error al mostrar los Alumnos'
            })
        }
        return res.render('index', {alumnos: alumnos}) //Con esto devolvemos en el navegador nuestro index.ejs
    })
}

/* Crear */
module.exports.crear = (req, res)=> {
    // console.log(req.body)
    const alumno = new Alumno({
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    alumno.save(function(error, alumno){
        if(error){

            return res.status(500).json({
            message: 'Error al crear Alumnos'

            })
        }
        res.redirect('/')
    })
}

/* Editar */
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Alumno.findByIdAndUpdate(id, {nombre, edad}, (error, alumno)=>{
        if(error){

            return res.status(500).json({
            message: 'Error al Editar Alumnos'

            })
        }
        res.redirect('/')
    })
}

/* Borrar */
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Alumno.findByIdAndRemove(id, (error, alumno)=>{
        if(error){

            return res.status(500).json({
            message: 'Error al Borrar Alumnos'

            })
        }
        res.redirect('/')

    })
}