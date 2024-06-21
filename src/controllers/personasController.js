// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getPersonas = (req, res) => {
   const sql = "SELECT * FROM t_personas WHERE f_baja IS NULL";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getPersona = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM t_personas WHERE id_persona = ? AND f_baja IS NULL";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 module.exports = {getPersonas, getPersona};