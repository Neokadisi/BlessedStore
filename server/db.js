require("dotenv").config();

const sql = require("mssql/msnodesqlv8");

const config = {
    connectionString:
        `Driver={${process.env.DB_DRIVER}};` +
        `Server=${process.env.DB_SERVER};` +
        `Database=${process.env.DB_DATABASE};` +
        `Trusted_Connection=Yes;` +
        `TrustServerCertificate=Yes;`
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