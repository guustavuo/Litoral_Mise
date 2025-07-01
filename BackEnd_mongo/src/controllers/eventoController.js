const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cors = require('cors');
app.use(cors());
 

// Criar evento
exports.createEvento = async (req, res) => {
  const { nome, data, tipo, local, faixaEtaria, preco, descricao } = req.body;
  try {
    const novoEvento = await prisma.evento.create({
      data: {
        nome,
        data: new Date(data),
        tipo,
        local,
        faixaEtaria,
        preco: parseFloat(preco),
        descricao
      }
    });
    res.status(201).json("Evento cadastrado com sucesso!");
  } catch (error) {
    console.error('Erro ao criar evento:', error); // Mostra no terminal
    res.status(500).json({ error: error.message }); // Retorna mensagem real pro Thunder Client
  }
};

// Buscar todos os eventos
exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await prisma.evento.findMany();
    res.json(eventos);
  } catch (error) {
    console.error('Erro real:', error); // 👈 mostra no console
    res.status(500).json({ error: error.message }); // 👈 mostra no Thunder Client
  }
};

// Buscar evento por ID
exports.getEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await prisma.evento.findUnique({
      where: { id }
    });
    if (!evento) return res.status(404).json({ error: 'Evento não encontrado.' });
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evento.' });
  }
};

// Atualizar evento
exports.updateEvento = async (req, res) => {
  const { id } = req.params;
  const { nome, data, tipo, local, faixaEtaria, preco, descricao } = req.body;
  try {
    const eventoAtualizado = await prisma.evento.update({
      where: { id },
      data: {
        nome,
        data: new Date(data),
        tipo,
        local,
        faixaEtaria,
        preco: parseFloat(preco),
        descricao
      }
    });
    res.json(eventoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar evento.' });
  }
};

// Deletar evento
exports.deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.evento.delete({ where: { id } });
    res.json({ message: 'Evento deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar evento.' });
  }
};

exports.getEventos = async (req, res) => {
  const { nome, tipo, faixaEtaria, local, precoMin, precoMax } = req.query;

  const filtro = {};

  if (nome) {
    filtro.nome = { contains: nome, mode: 'insensitive' };
  }
  if (tipo) {
    filtro.tipo = { equals: tipo, mode: 'insensitive' };
  }
  if (faixaEtaria) {
    filtro.faixaEtaria = { equals: faixaEtaria, mode: 'insensitive' };
  }
  if (local) {
    filtro.local = { contains: local, mode: 'insensitive' };
  }
  if (precoMin || precoMax) {
    filtro.preco = {};
    if (precoMin) filtro.preco.gte = parseFloat(precoMin);
    if (precoMax) filtro.preco.lte = parseFloat(precoMax);
  }

  if (Object.keys(filtro).length === 0) {
    return res.json([]); // retorna vazio se não passou filtro
  }

  try {
    const eventos = await prisma.evento.findMany({ where: filtro });
    res.json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos com filtro:', error);
    res.status(500).json({ error: error.message });
  }
};

// GET por nome
exports.getEventoPorNome = async (req, res) => {
  const { nome } = req.params;
  try {
    const evento = await prisma.evento.findFirst({
      where: { nome: { equals: nome, mode: 'insensitive' } },
    });
    if (!evento) return res.status(404).json({ error: 'Evento não encontrado.' });
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evento.' });
  }
};

// Atualizar evento pelo nome
exports.updateEventoPorNome = async (req, res) => {
  const { nome } = req.params;
  const { nome: novoNome, data, tipo, local, faixaEtaria, preco, descricao } = req.body;

  try {
    const eventoExistente = await prisma.evento.findFirst({
      where: { nome: { equals: nome, mode: 'insensitive' } }
    });

    if (!eventoExistente) {
      return res.status(404).json({ error: 'Evento não encontrado para atualização.' });
    }

    const eventoAtualizado = await prisma.evento.update({
      where: { id: eventoExistente.id },
      data: {
        nome: novoNome,
        data: new Date(data),
        tipo,
        local,
        faixaEtaria,
        preco: parseFloat(preco),
        descricao
      }
    });

    res.json(eventoAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar evento por nome:', error);
    res.status(500).json({ error: 'Erro ao atualizar evento.' });
  }
};

// DELETE por nome
exports.deleteEventoPorNome = async (req, res) => {
  const { nome } = req.params;

  try {
    const evento = await prisma.evento.findFirst({
      where: { nome: { equals: nome, mode: 'insensitive' } },
    });

    if (!evento)
      return res.status(404).json({ error: 'Evento não encontrado para exclusão.' });

    await prisma.evento.delete({
      where: { id: evento.id },
    });

    res.json({ mensagem: 'Evento deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar evento.' });
  }
};
