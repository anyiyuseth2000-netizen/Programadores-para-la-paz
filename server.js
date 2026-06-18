const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };
  reportes.push(reporte);
  res.json({ mensaje: "Reporte registrado", reporte: reporte });
});

app.get('/preguntas', (req, res) => {
  res.sendFile(path.join(__dirname, 'preguntas-semana7.txt'));
});

app.get('/ejemplos', (req, res) => {
  res.sendFile(path.join(__dirname, 'ejemplos-reportes.txt'));
});

app.get('/prueba', (req, res) => {
  res.sendFile(path.join(__dirname, 'prueba-reportes.txt'));
});

app.listen(3000, () => {
  console.log('Servidor ejecutandose en puerto 3000');
});