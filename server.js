const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

app = express();

// Cargar rutas
const appRoutes = require('./routes/approutes');


// cors
app.use(cors({ origin: 'http://localhost:3800' }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', appRoutes);

module.exports = app;
