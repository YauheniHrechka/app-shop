const express = require('express');
const { login, registration } = require('../controllers/auth');
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/login', login);
router.post('/registration', upload.single('file'), registration);

module.exports = router;