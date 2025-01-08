const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { connectToDB, mssql } = require('../config/dbConfig');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined. Please set it in the environment variables.');
}

router.post('/api/v1/login', async (req, res) => {
  console.log('Request body:', req.body);
  const { user, password } = req.body;

  try {
    if (!user || typeof user !== 'string' || user.trim() === '') {
      return res.status(400).json({ success: false, message: 'Invalid user' });
    }
    if (!password || typeof password !== 'string' || password.trim() === '') {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    const pool = await connectToDB();

    const result = await pool
      .request()
      .input('user', mssql.NVarChar, user)
      .query('SELECT * FROM Usuaris WHERE nomUsuari = @user');

    if (result.recordset.length > 0) {
      const isPasswordValid = await bcrypt.compare(password, result.recordset[0].contrasenya);
      if (isPasswordValid) {
        const token = jwt.sign(
          { user: user, role: result.recordset[0].role },
          JWT_SECRET,
          { expiresIn: '15m' }
        );
        res.status(200).json({ success: true, message: 'Login successful', token });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ success: false, message: 'An unexpected error occurred' });
  }
});

module.exports = router;