// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getServicios = (req, res) => {
   const sql = "SELECT * FROM t_servicios WHERE f_baja IS NULL";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getServicio = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM t_servicios WHERE id_servicio = ? AND f_baja IS NULL";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 module.exports = {getServicios, getServicio/*, createEspecialidad, updateMovie, deleteMovie*/};