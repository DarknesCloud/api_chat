const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const respuestasRouter = require('./routes/respuestas');
app.use('/api/respuestas', respuestasRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor en puerto ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('Error al conectar a MongoDB:', err));
