const express = require('express');
const recetteRoutes = require('./routes/recetteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/api', recetteRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
