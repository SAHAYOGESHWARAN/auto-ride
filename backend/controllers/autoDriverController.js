const express = require('express');
const { registerDriver } = require('../controllers/autoDriverController');
const router = express.Router();

router.post('/register', registerDriver);

module.exports = router;

const AutoDriver = require('../models/AutoDriver');

const registerDriver = async (req, res) => {
    const { name, vehicle, licensePlate } = req.body;
    try {
        const newDriver = new AutoDriver({ name, vehicle, licensePlate });
        await newDriver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerDriver };