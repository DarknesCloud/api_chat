const express = require('express');
const router = express.Router();
const Respuesta = require('../models/Respuesta');

// POST: Guardar respuesta
router.post('/', async (req, res) => {
  try {
    const { id, respuesta } = req.body;

    // Si no hay id, generamos uno (opcional)
    const nuevoId = id || `anon-${Date.now()}`;

    const nuevaRespuesta = new Respuesta({
      id: nuevoId,
      respuesta,
    });

    await nuevaRespuesta.save();
    res.status(201).json(nuevaRespuesta);
  } catch (error) {
    console.error('Error al guardar la respuesta:', error.message);
    res
      .status(400)
      .json({
        error:
          'El servidor respondió con un error. Verifica los parametros y/o la URL.',
      });
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
