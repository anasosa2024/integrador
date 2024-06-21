// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router profesionalesController
const profesionalesController = require('../controllers/profesionalesController');

router.get('/', profesionalesController.getProfesionales);
router.get('/:id', profesionalesController.getProfesional);
//router.post('/', profesionalesController.createProfesional);
//router.put('/:id', profesionalesController.updateProfesional);
//router.delete('/:id', profesionalesController.deleteProfesional);

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;