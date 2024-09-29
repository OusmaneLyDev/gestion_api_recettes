import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv'; // Importation du module dotenv
dotenv.config(); 

const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: false
});

export default db; // Exportation par défaut du pool de connexion
