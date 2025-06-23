// src/routes/eventoRoutes.js
const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// Rotas de evento
router.post('/eventos', eventoController.createEvento);
router.get('/eventos', eventoController.getAllEventos);
router.get('/eventos/:id', eventoController.getEventoById);
router.put('/eventos/:id', eventoController.updateEvento);
router.delete('/eventos/:id', eventoController.deleteEvento);
router.get('/eventos', eventoController.getEventos);


module.exports = router;
