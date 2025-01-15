const express = require('express');
const { connectToDB, mssql } = require('../config/dbConfig');

const router = express.Router();

router.get('/api/v1/vector', async (req, res) => {
  const idCurs = "DA085A3D-78AD-47FA-B90F-30202AD7BD6C"; 
  const idSda = "5DEBF518-4A5E-4D24-8693-066389C7DA99"

  if (!idCurs) {
    return res.status(400).json({ success: false, message: 'idCurs and idSda is required' });
  }

  try {
    const pool = await connectToDB();

    const query = `
      SELECT DISTINCT VP.idVectorPlantilla, VP.descripcioVector
      FROM VectorPlantilla VP
      INNER JOIN SdA ON SdA.idCurs = VP.idCurs
      WHERE VP.idCurs = @idCurs AND SdA.idSda = @idSda
    `;

    const result = await pool
      .request()
      .input('idCurs', mssql.UniqueIdentifier, idCurs)
      .input('idSda', mssql.UniqueIdentifier, idSda)
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
