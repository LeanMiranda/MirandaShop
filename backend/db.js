
const sql = require('mssql');

const dbConfig = {
  user: 'DESKTOP-4CHN4FG\\lean',
  server: 'DESKTOP-4CHN4FG\\SQLEXPRESS',      // Cambia por tu servidor de SQL Server (ej. localhost)
  database: 'MIRANDASHOP', // Cambia por el nombre de tu base de datos
  options: {
    encrypt: false, // Usa esta opción si tu SQL Server está en Azure
    trustServerCertificate: true // Cambia según sea necesario
  },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log('Conexión a la base de datos exitosa.');
    return pool;
  })
  .catch((err) => console.log('Error de conexión a la base de datos:', err));

module.exports = {
  sql,
  poolPromise,
};