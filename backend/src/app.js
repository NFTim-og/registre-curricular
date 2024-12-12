const express = require('express');
const cors = require('cors'); 

const loginRoutes = require('./routes/loginRoutes'); 
const vectorRoutes = require('./routes/vectorRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(loginRoutes);
app.use(vectorRoutes);

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
