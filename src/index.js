// Importo el modulo express
const express = require ('express');
require('dotenv').config();

// Importo el enrutador de Especialidades desde el archivo routes/especialidadesRoutes
const especialidadesRoutes = require('./routes/especialidadesRoutes');
// Importo el enrutador de Profesionales desde el archivo routes/profesionalesRoutes
const profesionalesRoutes = require('./routes/profesionalesRoutes');
// Importo el enrutador de Personas desde el archivo routes/personasRoutes
const personasRoutes = require('./routes/personasRoutes');
// Importo el enrutador de Servicios desde el archivo routes/srviciosRoutes
const serviciosRoutes = require('./routes/serviciosRoutes');

// Creo una instancia de una aplicación Express
const app = express();

// Middleware para analizar cuerpos JSON en las solicitudes entrantes
app.use (express.json());
// Middleware para apuntar a la carpeta public
app.use(express.static('public'));

// Defino la ruta de especialidades y llamo al router para manejar las rutas que comiencen con /especialidades
app.use('/especialidades', especialidadesRoutes);
// Defino la ruta de profesionales y llamo al router para manejar las rutas que comiencen con /profesionales
app.use('/profesionales', profesionalesRoutes);
// Defino la ruta de personas y llamo al router para manejar las rutas que comiencen con /personas
app.use('/personas', personasRoutes);
// Defino la ruta de servicios y llamo al router para manejar las rutas que comiencen con /servicios
app.use('/servicios', serviciosRoutes);

// Defino el puerto en el que el servidor escucharás las peticiones
const port = process.env.DB_PORT || 4000;

// Inicio el servidor y lo configuro para escuche en el puerto definido
app.listen(port, () => {
    console.log (`Server is running on port ${port}`);
});
