const express = require('express');
const carRoutes = require('./routes/carRoutes');

const app = express();

app.use(express.json());

app.use('/api/cars', carRoutes);

module.exports = app;