const express = require('express');
const { connectToDB, mssql } = require('../config/dbConfig');

const router = express.Router();

router.post('/api/v1/login', async (req, res) => {
  console.log('Request body:', req.body)
  const { user, password } = req.body;

  try {
    const pool = await connectToDB();

    if (!user || !password) {
      return res.status(400).json({ success: false, message: 'User or password missing' });
    }

    const result = await pool
      .request()
      .input('user', mssql.NVarChar, user)
      .input('password', mssql.NVarChar, password)
      .query('SELECT * FROM Users WHERE username = @user AND password = @password');

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

module.exports = router;
