// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router especialidadController
const especialidadController = require('../controllers/especialidadesController');

router.get('/', especialidadController.getEspecialidades);
router.get('/:id', especialidadController.getEspecialidad);
router.post('/', especialidadController.createEspecialidad);
//router.put('/:id', especialidadController.updateEspecialidad);
//router.delete('/:id', especialidadController.deleteEspecialidad);

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;