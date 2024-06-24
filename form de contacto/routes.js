const express = require('express');
const dotenv = require('dotenv');
const pool = require('./db'); // Importar pool desde db.js
const { addUser, updateUser } = require('./db');
const router = express.Router();

// Ruta GET - Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await pool.getUsers(); // Llamar a la función getUsers de db.js
    res.json(usuarios); // Enviar datos de usuarios en formato JSON
  } catch (err) {
    console.error(err); // Registrar error en la consola
    res.status(500).json({ message: 'Error al recuperar usuarios' }); // Enviar respuesta de error
  }
});

/// Ruta POST para crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, tipo_contacto, mensaje, tipo_respuesta } = req.body;
    const result = await addUser({
      nombre,
      apellido,
      email,
      telefono,
      tipo_contacto,
      mensaje,
      tipo_respuesta
    });
    res.json({ message: '¡Usuario agregado exitosamente!', id: result.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al agregar usuario' });
  }
});


// Ruta DELETE - Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extraer ID del usuario de los parámetros de la solicitud
    const result = await pool.deleteUser(id); // Llamar a la función deleteUser de db.js, pasando el ID
    if (result.message) {
      // Manejar el escenario "Usuario no encontrado"
      res.status(404).json(result);
    } else {
      res.json({ message: '¡Usuario eliminado exitosamente!', afectados: result.afectados }); // Enviar respuesta de éxito con filas afectadas
    }
  } catch (err) {
    console.error(err); // Registrar error en la consola
    res.status(500).json({ message: 'Error al eliminar usuario' }); // Enviar respuesta de error
  }
});

// Ruta PUT - Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extraer ID del usuario de los parámetros de la solicitud
    const { nombre, apellido, email, teléfono, tipo_contacto, mensaje, tipo_respuesta } = req.body; // Extraer datos del usuario del cuerpo de la solicitud
    const result = await pool.updateUser(id, { // Llamar a la función updateUser de db.js, pasando el ID y los datos del usuario actualizados
      nombre,
      apellido,
      email,
      teléfono,
      tipo_contacto,
      mensaje,
      tipo_respuesta,
    });
    if (result.message) {
      // Manejar el escenario "Usuario no encontrado"
      res.status(404).json(result);
    } else {
      res.json({ message: '¡Usuario actualizado exitosamente!', afectados: result.afectados }); // Enviar respuesta de éxito con filas afectadas
    }
  } catch (err) {
    console.error(err); // Registrar error en la consola
    res.status(500).json({ message: 'Error al actualizar usuario' }); // Enviar respuesta de error
  }
});

// Exportar el router
module.exports = router;
