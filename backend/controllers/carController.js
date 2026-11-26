const cars = require('../models/carModel');

const getCars = (req, res) => {
    res.json(cars);
};


const getCarById = (req, res) => {
    const car = cars.find(
        (car) => car.id === Number(req.params.id)
    );

    if (!car) {
        return res.status(404).json({
            message: 'Car not found'
        });
    }

    res.json(car);
};
const addCar = (req, res) => {
    const newCar = req.body;

    cars.push(newCar);

    res.status(201).json(newCar);
};
const deleteCar = (req, res) => {
    const index = cars.findIndex(
        (car) => car.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: 'Car not found'
        });
    }

    cars.splice(index, 1);

    res.json({
        message: 'Car deleted successfully'
    });
};
const updateCar = (req, res) => {
    const car = cars.find(
        (car) => car.id === Number(req.params.id)
    );

    if (!car) {
        return res.status(404).json({
            message: 'Car not found'
        });
    }

    Object.assign(car, req.body);

    res.json(car);
};

module.exports = { getCars, getCarById, addCar, updateCar, deleteCar };
