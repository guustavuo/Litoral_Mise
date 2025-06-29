// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas de usuário
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
// Buscar usuário por nome
router.get('/users/nome/:nome', userController.getUserByNome);
// Atualizar usuário por nome
router.put('/users/nome/:nome', userController.updateUserByNome);
// Deletar usuário por nome
router.delete('/users/nome/:nome', userController.deleteUserByNome);


module.exports = router;
