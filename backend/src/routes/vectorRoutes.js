const express = require('express');
const { connectToDB, mssql } = require('../config/dbConfig');

const router = express.Router();

router.post('/api/v1/vector', async (req, res) => {
  try {
    const pool = await connectToDB();
    
    const result = await pool
      .request()
      .query('SELECT idVector, descripcioVector FROM VectorPlantilla');

    res.status(200).json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('Error querying VectorPlantilla:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  } finally {
    mssql.close();
  }
});

module.exports = router;
