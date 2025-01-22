const AutoDriver = require('../models/AutoDriver');
const { validationResult } = require('express-validator');

// Register a new driver
const registerDriver = async (req, res) => {
    const { name, vehicle, licensePlate } = req.body;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newDriver = new AutoDriver({ name, vehicle, licensePlate });
        await newDriver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all drivers
const getDrivers = async (req, res) => {
    try {
        const drivers = await AutoDriver.find();
        res.json(drivers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a driver by ID
const getDriverById = async (req, res) => {
    const { id } = req.params;
    try {
        const driver = await AutoDriver.findById(id);
        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.json(driver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a driver
const updateDriver = async (req, res) => {
    const { id } = req.params;
    const { name, vehicle, licensePlate } = req.body;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedDriver = await AutoDriver.findByIdAndUpdate(
            id,
            { name, vehicle, licensePlate },
            { new: true, runValidators: true }
        );
        if (!updatedDriver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.json(updatedDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a driver
const deleteDriver = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDriver = await AutoDriver.findByIdAndDelete(id);
        if (!deletedDriver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.json({ message: 'Driver deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerDriver, getDrivers, getDriverById, updateDriver, deleteDriver };