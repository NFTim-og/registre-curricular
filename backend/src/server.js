const express = require('express');
const mssql = require('mssql');
const cors = require('cors');
require('dotenv').config();  

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json()); 
app.use(cors()); 

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, 
  database: process.env.DB_NAME,
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  }
};

app.get('/', (req, res) => {
  res.send('Servidor de backend funcionando');
});

app.post('/api/v1/login', async (req, res) => {
  const { user, password } = req.body;

  try {
    await mssql.connect(sqlConfig);

    const result = await mssql.query`SELECT * FROM login WHERE user = ${user} AND password = ${password}`;
    
    if (!user || !password) {
      return res.status(400).json({ success: false, message: 'User or password missing' });
    }

    if (result.recordset.length > 0) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  } finally {
    mssql.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});