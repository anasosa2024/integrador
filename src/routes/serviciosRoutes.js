// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router serviciosController
const serviciosController = require('../controllers/serviciosController');

router.get('/', serviciosController.getServicios);
router.get('/:id', serviciosController.getServicio);
//router.post('/', profesionalesController.createProfesional);
//router.put('/:id', profesionalesController.updateProfesional);
//router.delete('/:id', profesionalesController.deleteProfesional);

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;