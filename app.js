const express = require ('express');
const app = express()

const db = require('./db')

/* Seteando motor de plantinnas */
app.set('view engine', 'ejs')

/* Para capturar los datos de los imputs usando el formato Json */
app.use(express.urlencoded({extended:true}))
app.use(express.json())

/* Seteando la carpeta Public */
app.use(express.static('public'))

/* Para llamar las rutas */
const alumnos = require('./routes/alumnos')
app.use(alumnos)

app.get('/', (req,res)=>{
    res.send('Epale')
})

/* Puerto */
app.listen(3000, ()=>{
    console.log('SERVEN ON PORT 3000')
})