const express = require('express');
const passport = require('passport');
const router = express.Router();
const { getAll } = require('../controllers/cart');

router.get('/', passport.authenticate('jwt', { session: false }), getAll);
// router.get('/', getAll);

module.exports = router;