const Rider = require('../models/Rider');
const { validationResult } = require('express-validator');

// Register a new rider
const registerRider = async (req, res) => {
    const { name, email, phone } = req.body;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newRider = new Rider({ name, email, phone });
        await newRider.save();
        res.status(201).json(newRider);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all riders
const getRiders = async (req, res) => {
    try {
        const riders = await Rider.find();
        res.json(riders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a rider by ID
const getRiderById = async (req, res) => {
    const { id } = req.params;
    try {
        const rider = await Rider.findById(id);
        if (!rider) {
            return res.status(404).json({ message: 'Rider not found' });
        }
        res.json(rider);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a rider
const updateRider = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedRider = await Rider.findByIdAndUpdate(
            id,
            { name, email, phone },
            { new: true, runValidators: true }
        );
        if (!updatedRider) {
            return res.status(404).json({ message: 'Rider not found' });
        }
        res.json(updatedRider);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a rider
const deleteRider = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRider = await Rider.findByIdAndDelete(id);
        if (!deletedRider) {
            return res.status(404).json({ message: 'Rider not found' });
        }
        res.json({ message: 'Rider deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerRider, getRiders, getRiderById, updateRider, deleteRider };