// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos (index.html, CSS, JS)
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});

