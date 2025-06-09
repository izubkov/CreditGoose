const express = require('express');
const router = express.Router();

const { simulate } = require('../controllers/simulateController');
const { healthCheck } = require('../controllers/healthController');

// Routes
router.get('/simulate', simulate);
router.get('/health', healthCheck);

module.exports = router;