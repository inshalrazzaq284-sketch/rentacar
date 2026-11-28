const express = require("express");
const carRoutes = require("./routes/carRoutes");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/cars", carRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;