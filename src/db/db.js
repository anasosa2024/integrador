
// Importo el modulo mysql2
const mysql = require('mysql2');
require('dotenv').config();

// Creo la conexion con la base
const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER, 
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
);

connection.connect((err) => {
    if (err) {
        console.log('Error de conexion a la base de datos: ', err);
        return;
    }
    console.log('Conexion Exitosa!');
});

module.exports = connection;
