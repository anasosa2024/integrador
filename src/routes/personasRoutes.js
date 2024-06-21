// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router personasController
const personasController = require('../controllers/personasController');

router.get('/', personasController.getPersonas);
router.get('/:id', personasController.getPersona);
//router.post('/', personasController.createPersona);
//router.put('/:id', personasController.updatePersona);
//router.delete('/:id', personasController.deletePersona);

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;