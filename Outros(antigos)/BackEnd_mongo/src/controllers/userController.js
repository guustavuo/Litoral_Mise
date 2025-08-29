const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar usuário
exports.createUser = async (req, res) => {
  const { nome, email, senha, telefone } = req.body;
  try {
    const novoUsuario = await prisma.user.create({
      data: { nome, email, senha, telefone }
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

// Buscar todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

// Buscar usuário por ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
};

// Atualizar usuário
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, telefone } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { nome, email, senha, telefone }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
};

// Deletar usuário
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id } });
    res.json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
};

// Buscar usuário por nome
exports.getUserByNome = async (req, res) => {
  const { nome } = req.params;
  try {
    const user = await prisma.user.findFirst({
      where: { nome: { equals: nome, mode: 'insensitive' } }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário por nome:', error);
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
};

// Atualizar usuário por nome
exports.updateUserByNome = async (req, res) => {
  const { nome } = req.params;
  const { nome: novoNome, email, senha, telefone } = req.body;

  try {
    const userExistente = await prisma.user.findFirst({
      where: { nome: { equals: nome, mode: 'insensitive' } }
    });

    if (!userExistente) {
      return res.status(404).json({ error: 'Usuário não encontrado para atualização.' });
    }

    const userAtualizado = await prisma.user.update({
      where: { id: userExistente.id },
      data: {
        nome: novoNome,
        email,
        senha,
        telefone
      }
    });

    res.json(userAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar usuário por nome:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
};

// Deletar usuário por nome
exports.deleteUserByNome = async (req, res) => {
  const { nome } = req.params;

  try {
    const user = await prisma.user.findFirst({
      where: { nome: { equals: nome, mode: 'insensitive' } }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado para exclusão.' });
    }

    await prisma.user.delete({
      where: { id: user.id }
    });

    res.json({ mensagem: 'Usuário deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar usuário por nome:', error);
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
};