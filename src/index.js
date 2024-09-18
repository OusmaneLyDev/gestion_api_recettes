const express = require('express');
const recetteRoutes = require('./routes/recetteRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(recetteRoutes);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
