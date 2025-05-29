const express = require('express');
const router = express.Router();
const Respuesta = require('../models/Respuesta');

// POST: Guardar respuesta
router.post('/', async (req, res) => {
  try {
    const nuevaRespuesta = new Respuesta(req.body);
    const guardado = await nuevaRespuesta.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Obtener todas las respuestas
router.get('/', async (req, res) => {
  try {
    const respuestas = await Respuesta.find();
    res.json(respuestas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
