const express = require('express');
const { body, param } = require('express-validator');
const {
    registerDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
} = require('../controllers/autoDriverController');
const authMiddleware = require('../middleware/authMiddleware'); // Adjust the path as necessary
const router = express.Router();

// Validation rules
const driverValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('vehicle').notEmpty().withMessage('Vehicle is required'),
    body('licensePlate').notEmpty().withMessage('License Plate is required'),
];

// Routes
router.post('/register', authMiddleware, driverValidation, registerDriver); // Protected route
router.get('/', authMiddleware, getDrivers); // Protected route
router.get('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid driver ID'), getDriverById); // Protected route
router.put('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid driver ID'), driverValidation, updateDriver); // Protected route
router.delete('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid driver ID'), deleteDriver); // Protected route

module.exports = router;