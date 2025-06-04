const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createEvento = async (req, res) => {
  const { nome, data, tipo, local, faixaEtaria, preco, descricao } = req.body;
  try {
    const evento = await prisma.evento.create({
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
    res.status(201).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await prisma.evento.findMany();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await prisma.evento.findUnique({ where: { id: Number(id) } });
    if (evento) res.json(evento);
    else res.status(404).json({ error: 'Evento não encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEvento = async (req, res) => {
  const { id } = req.params;
  const { nome, data, tipo, local, faixaEtaria, preco, descricao } = req.body;
  try {
    const evento = await prisma.evento.update({
      where: { id: Number(id) },
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
    res.json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.evento.delete({ where: { id: Number(id) } });
    res.json({ message: 'Evento deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
