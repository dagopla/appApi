const express= require('express');
const cors= require('express')
require('dotenv').config();
const app= express();


//Directorio Publico
app.use(express.static('public'))


//cors
app.use(cors());

//Lectura y paseo del body
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});