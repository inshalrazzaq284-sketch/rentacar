
require("dotenv").config();

const mongoose = require("mongoose");
const Car = require("./models/carModel");
const cars = require("./models/carsData");

const seedCars = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        for (const car of cars) {
            await Car.updateOne(
                { id: car.id },
                { $set: car },
                { upsert: true }
            );
        }

        console.log("6 cars saved successfully in MongoDB!");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await mongoose.disconnect();
    }
};

seedCars();
