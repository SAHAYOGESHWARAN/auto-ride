const mongoose = require('mongoose');
const validator = require('validator');

// Define the Rider schema
const riderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true, // Removes whitespace from both ends
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensures that email addresses are unique
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email address',
        },
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function(v) {
                // Custom validation for phone number format (example: US format)
                return /\(\d{3}\) \d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        trim: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Method to format rider information
riderSchema.methods.formatRiderInfo = function() {
    return {
        id: this._id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

// Export the Rider model
const Rider = mongoose.model('Rider', riderSchema);
module.exports = Rider;