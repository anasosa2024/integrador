// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getEspecialidades = (req, res) => {
   const sql = "SELECT * FROM t_especialidades WHERE f_baja IS NULL";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getEspecialidad = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM t_especialidades WHERE id_especialidad = ? AND f_baja IS NULL";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 const createEspecialidad = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {x_especialidad} = req.body;
    const sql = "insert into t_especialidades (x_especialidad) values (?)";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [x_especialidad], (err, results) => {
     if (err) throw err;
     res.json({message: "Especialidad creada con id " + results.insertId, id_especialidad: results.insertId});
    }) ;
 };

/*
 const updateMovie = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const {title, director, anio} = req.body;
    const sql = "update movies set title = ?, director = ?, anio = ? where id = ?";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [title, director, anio, id], (err, results) => {
     if (err) throw err;
     res.json({message: 'Pelicula actualizada'});
    }) ;
 };

 const deleteMovie = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "delete from movies where id = ?";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json({message: 'Pelicula eliminada'});
    }) ;
 };
*/
module.exports = {getEspecialidades, getEspecialidad, createEspecialidad/*, updateMovie, deleteMovie*/};