const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // Optional: Consider connection pooling options for performance optimization
  // e.g., connectionLimit: 10, queueLimit: 0
});

async function getUsers() {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
  } catch (err) {
    throw err; // Re-throw for error handling in routes.js
  }
}

async function addUser(userData) {
  try {
    const { nombre, apellido, email, telefono, tipo_contacto, mensaje, tipo_respuesta } = userData;
    const sql = `
      INSERT INTO usuarios (Nombre, Apellido, Email, Teléfono, Tipo_contacto, Mensaje, Tipo_respuesta)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [nombre, apellido, email, telefono, tipo_contacto, mensaje, tipo_respuesta];
    const result = await pool.query(sql, values);
    return { message: 'Usuario agregado exitosamente!', id: result[0].insertId };
  } catch (err) {
    console.error('Error al agregar usuario:', err);
    throw err;
  }
}

async function deleteUser(id) {
  try {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return { message: 'Usuario no encontrado' }; // Handle case where user doesn't exist
    }
    return { message: 'Usuario eliminado exitosamente!', afectados: result.affectedRows };
  } catch (err) {
    throw err; // Re-throw for error handling in routes.js
  }
}

async function updateUser(id, userData) {
  try {
    const { nombre, apellido, email, telefono, tipo_contacto, mensaje, tipo_respuesta } = userData;

    // Verificar si el nombre no es vacío o nulo
    if (!nombre) {
      throw new Error('El nombre del usuario no puede ser vacío.');
    }

    const sql = `
      UPDATE usuarios 
      SET 
        Nombre = ?, 
        Apellido = ?, 
        Email = ?, 
        Teléfono = ?, 
        Tipo_contacto = ?, 
        Mensaje = ?, 
        Tipo_respuesta = ?
      WHERE id = ?
    `;
    const values = [nombre, apellido, email, telefono, tipo_contacto, mensaje, tipo_respuesta, id];
    
    const [result] = await pool.query(sql, values);

    if (result.affectedRows === 0) {
      return { message: 'Usuario no encontrado' }; // Manejar el caso donde el usuario no existe
    }

    return { message: 'Usuario actualizado exitosamente!', afectados: result.affectedRows };
  } catch (err) {
    console.error(err); // Registrar error para depuración
    throw err; // Re-lanzar para manejo de errores en routes.js
  }
}

module.exports = { getUsers, addUser, deleteUser, updateUser, pool };
