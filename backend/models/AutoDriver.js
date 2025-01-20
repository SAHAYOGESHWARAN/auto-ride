const mongoose = require('mongoose');

const autoDriverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vehicle: { type: String, required: true },
    licensePlate: { type: String, required: true },
});

const AutoDriver = mongoose.model('AutoDriver', autoDriverSchema);
module.exports = AutoDriver;