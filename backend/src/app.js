const express = require('express');
const cors = require('cors'); 

const loginRoutes = require('./routes/loginRoutes'); // Import login routes

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.use(loginRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
