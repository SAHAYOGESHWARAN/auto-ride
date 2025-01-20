const express = require('express');
const { registerDriver } = require('../controllers/autoDriverController');
const router = express.Router();

router.post('/register', registerDriver);

module.exports = router;