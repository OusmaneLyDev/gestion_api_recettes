import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// const db = createPool({
//   host: process.env.DB_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   connectionLimit: 10,
// });
const db = createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'Fouiny0513',
        database: 'gestion_recette',
        connectionLimit: 10
    }
)

export default db;
