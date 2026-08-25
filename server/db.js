require("dotenv").config();

const sql = require("mssql");

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

    options: {
        encrypt: true,
        trustServerCertificate: false
    },

    port: 1433
};

let pool = null;

async function conectarBD() {
    try {

        if (pool && pool.connected) {
            return pool;
        }

        pool = await sql.connect(config);

        console.log("=================================");
        console.log("✅ CONEXIÓN CON SQL SERVER EXITOSA");
        console.log(`✅ Base de datos: ${process.env.DB_DATABASE}`);
        console.log("=================================");

        return pool;

    } catch (error) {

        console.error("❌ ERROR CONECTANDO CON SQL SERVER");
        console.error(error.message);

        throw error;
    }
}

module.exports = {
    sql,
    conectarBD
};