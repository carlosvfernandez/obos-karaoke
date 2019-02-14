const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRoutes = require('./routes');

const app = express();

// cors
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cargar rutas
app.use('/', appRoutes);

module.exports = app;
