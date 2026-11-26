const express = require('express');

const {
    getCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
} = require('../controllers/carController');

const router = express.Router();

router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/', addCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;