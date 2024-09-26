import express from "express";
import router from "./src/routes/recetteRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
