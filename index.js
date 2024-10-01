import express from 'express';
import router from './src/routes/recetteRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
<<<<<<< HEAD
  origin: 'http://localhost:5173',
=======
    origin: 'https://gestion-recettes-three.vercel.app',
>>>>>>> 51b1d5bf0d2dfa667583c51e86bde563a22ee0f2
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
