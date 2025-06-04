const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const eventoRoutes = require('./src/routes/eventoRoutes');

const app = express();
app.use(bodyParser.json());

app.use(userRoutes);
app.use(eventoRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
// http://localhost:3000