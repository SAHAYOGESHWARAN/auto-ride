const mongoose = require('mongoose');

const autoDriverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vehicle: { type: String, required: true },
    licensePlate: { type: String, required: true },
});

module.exports = mongoose.model('AutoDriver', autoDriverSchema);