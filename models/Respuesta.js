const mongoose = require('mongoose');

const respuestaSchema = new mongoose.Schema({
  id: { type: String, required: true },
  respuesta: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Respuesta', respuestaSchema);
