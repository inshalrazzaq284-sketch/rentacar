
const Car = require("../models/carModel");

// Get all cars
const getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get car by ID
const getCarById = async (req, res) => {
    try {
        const car = await Car.findOne({
            id: Number(req.params.id)
        });

        if (!car) {
            return res.status(404).json({
                message: "Car not found"
            });
        }

        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new car
const addCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update car
const updateCar = async (req, res) => {
    try {
        const car = await Car.findOneAndUpdate(
            { id: Number(req.params.id) },
            req.body,
            { new: true, runValidators: true }
        );

        if (!car) {
            return res.status(404).json({
                message: "Car not found"
            });
        }

        res.json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete car
const deleteCar = async (req, res) => {
    try {
        const car = await Car.findOneAndDelete({
            id: Number(req.params.id)
        });

        if (!car) {
            return res.status(404).json({
                message: "Car not found"
            });
        }

        res.json({
            message: "Car deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};