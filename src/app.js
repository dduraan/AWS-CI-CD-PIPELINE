const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Deploy automático con GitHub Actions + AWS Elastic Beanstalk');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
