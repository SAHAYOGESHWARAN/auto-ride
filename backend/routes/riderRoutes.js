const express = require('express');
const { registerRider } = require('../controllers/riderController');
const router = express.Router();

router.post('/register', registerRider);

module.exports = router;