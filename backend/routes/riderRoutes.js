const express = require('express');
const { body, param } = require('express-validator');
const {
    registerRider,
    getRiders,
    getRiderById,
    updateRider,
    deleteRider,
} = require('../controllers/riderController');
const authMiddleware = require('../middleware/authMiddleware'); // Adjust the path as necessary
const router = express.Router();

// Validation rules for rider registration and updates
const riderValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('phone').notEmpty().withMessage('Phone number is required').matches(/^\(\d{3}\) \d{3}-\d{4}$/).withMessage('Phone number must be in the format (XXX) XXX-XXXX'),
];

// Routes
router.post('/register', riderValidation, registerRider); // Register a new rider
router.get('/', authMiddleware, getRiders); // Get all riders (protected route)
router.get('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid rider ID'), getRiderById); // Get a rider by ID (protected route)
router.put('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid rider ID'), riderValidation, updateRider); // Update a rider (protected route)
router.delete('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid rider ID'), deleteRider); // Delete a rider (protected route)

module.exports = router;