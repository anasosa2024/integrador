// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getProfesionales = (req, res) => {
   const sql = "SELECT * FROM profesionales_activos";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getProfesional = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM profesionales_activos WHERE id_profesional = ?";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 module.exports = {getProfesionales, getProfesional/*, createEspecialidad, updateMovie, deleteMovie*/};