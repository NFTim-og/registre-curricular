const mssql = require('mssql');
require('dotenv').config();

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
      encrypt: true, 
      trustServerCertificate: true, 
    },
  };

console.log('Database Configuration:', sqlConfig);

const connectToDB = async () => {
  try {
    const pool = await mssql.connect(sqlConfig);
    console.log('Connected to SQL Server!');
    return pool;
  } catch (err) {
    console.error('Database connection failed:', err.message);
    throw err;
  }
};

connectToDB();

module.exports = { sqlConfig, connectToDB, mssql };
