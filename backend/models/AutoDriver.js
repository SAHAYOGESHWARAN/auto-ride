const mongoose = require('mongoose');

// Define the AutoDriver schema
const autoDriverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true, // Removes whitespace from both ends
    },
    vehicle: {
        type: String,
        required: [true, 'Vehicle is required'],
        trim: true,
    },
    licensePlate: {
        type: String,
        required: [true, 'License Plate is required'],
        unique: true, // Ensures that license plates are unique
        trim: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Method to format driver information
autoDriverSchema.methods.formatDriverInfo = function() {
    return {
        id: this._id,
        name: this.name,
        vehicle: this.vehicle,
        licensePlate: this.licensePlate,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

// Export the AutoDriver model
module.exports = mongoose.model('AutoDriver', autoDriverSchema);