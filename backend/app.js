const express = require('express');
const carRoutes = require('./routes/carRoutes');
const contactRoutes = require(' ./routes/contactRoutes');

const app = express();

app.use(express.json());

app.use('/api/cars', carRoutes);
app.use('/api/contacts', contactRoutes);

module.exports = app;