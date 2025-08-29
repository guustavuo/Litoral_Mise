const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes');
const eventoRoutes = require('./src/routes/eventoRoutes');

const app = express();

// Permitir requisições de outros domínios (útil para quando for conectar com front separado)
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.use(userRoutes);
app.use(eventoRoutes);

// Rota para carregar o formulário HTML no navegador
app.get('/evento-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'evento.html'));
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3000');
});

// http://localhost:3000