const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const areaR = require('./routes/areaRoutes');
const ciudadR = require('./routes/ciudadRoutes');
const cargoR = require('./routes/cargoRoutes');
const eventosR = require('./routes/eventoRoutes');
const participanteR = require('./routes/participanteRoutes');
const loginR = require('./routes/loginRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Evento', {})
  .then(() => console.log('Mongo is working'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api', areaR);
app.use('/api', ciudadR);
app.use('/api', cargoR);
app.use('/api', eventosR);
app.use('/api', participanteR);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});