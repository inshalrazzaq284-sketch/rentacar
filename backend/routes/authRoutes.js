
const express = require("express");
const { signup, login } = require("../controllers/authController");

const router = express.Router();

// Sign Up API
router.post("/signup", signup);

// Login API
router.post("/login", login);

module.exports = router;

