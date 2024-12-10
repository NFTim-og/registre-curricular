const express = require('express');
const cors = require('cors'); 

const loginRoutes = require('./routes/loginRoutes'); // Import login routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', (req, res) => {
  res.send('Servidor de backend funcionando');
});

app.use(loginRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
