const mysql = require("mysql2");

const pool = mysql.createPool(
    {
        host: "localhost",
        user:   "root",
        password:   "CorsairVone1993",
        database: "schools",
        waitForConnections: true,
        connectionLimit:    10,
        queueLimit: 0

    }
).promise();

console.log("Conexión con la BBDD Creada");

module.exports = {pool};