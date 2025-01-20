const Rider = require('../models/Rider');

const registerRider = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newRider = new Rider({ name, email, phone });
        await newRider.save();
        res.status(201).json(newRider);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerRider };