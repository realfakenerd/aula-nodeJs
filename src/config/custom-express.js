const express = require('express');
const app = express();

const rotas = require('../app/routes/routes.js');
rotas(app)

module.exports = app;