const express = require('express');
const { login, registration } = require('../controllers/auth');
const router = express.Router();

router.get('/login', login);
router.post('/registration', registration);

module.exports = router;