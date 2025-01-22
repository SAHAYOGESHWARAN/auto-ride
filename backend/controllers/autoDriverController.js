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

const getDrivers = async (req, res) => {
    try {
        const drivers = await AutoDriver.find();
        res.json(drivers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerDriver, getDrivers };