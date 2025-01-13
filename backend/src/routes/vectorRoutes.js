const express = require('express');
const { connectToDB, mssql } = require('../config/dbConfig');

const router = express.Router();

router.post('/api/v1/vector', async (req, res) => {
  const { idCurs } = req.body; 

  if (!idCurs) {
    return res.status(400).json({ success: false, message: 'idCurs is required' });
  }

  try {
    const pool = await connectToDB();

    const query = `
      SELECT VP.idVectorPlantilla, VP.descripcioVector
      FROM VectorPlantilla VP
      INNER JOIN SdA ON SdA.idCurs = VP.idCurs
      WHERE VP.idCurs = @idCurs
    `;

    const result = await pool
      .request()
      .input('idCurs', mssql.UniqueIdentifier, idCurs) 
      .query(query);

    console.log('Vectores retrieved successfully:', result.recordset);

    res.status(200).json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('Error querying VectorPlantilla:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  } finally {
    mssql.close();
  }
});

module.exports = router;
