const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');


router.post('/eventos', eventoController.createEvento);
router.get('/eventos', eventoController.getAllEventos);
router.get('/eventos/:id', eventoController.getEventoById);
router.put('/eventos/:id', eventoController.updateEvento);
router.delete('/eventos/:id', eventoController.deleteEvento);

module.exports = router;
