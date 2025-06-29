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
// Buscar evento pelo nome
router.get('/eventos/nome/:nome', eventoController.getEventoPorNome);
// Atualizar evento pelo nome
router.put('/eventos/nome/:nome', eventoController.updateEventoPorNome);
// Deletar evento pelo nome
router.delete('/eventos/nome/:nome', eventoController.deleteEventoPorNome);


module.exports = router;
