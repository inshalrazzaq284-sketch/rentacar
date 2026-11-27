const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    type: String,
    image: String,
    description: String,
    specs: [String],
    price: String
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;