const {createPool} = require('mysql');

const pool = createPool(
    {
        host:"localhost",
        user: "votre_nom_user",
        password: "votre_password",
        database: "votre_database",
        connectionLimit: 10
    }
)
pool.query('SELECT * FROM recettes', (err, rows, fields) => {
    if (err) throw err
  
    return console.log(rows)
  })
  