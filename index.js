import express from 'express';
import router from './src/routes/recetteRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: 'https://gestion-recettes-three.vercel.app',
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
