const express = require('express');
const mysql = require('mysql2/promise'); // Usar mysql2/promise para promesas
const cors = require('cors');


// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5500; // Usar PORT del .env o 3000 por defecto


// Middlewares -------------------------------------
app.use(express.json()); // Analizar datos JSON entrantes

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir estos métodos de solicitud
  allowedHeaders: ['Content-Type', 'Authorization'] // Permitir estos encabezados personalizados
};

app.use(cors(corsOptions));


// Rutas -------------------------------------------
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});



app.use('/api', routes);


// Servidor en ejecución -----------------------------------
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`); // Usar plantillas literales para una interpolación de cadenas más limpia
});
