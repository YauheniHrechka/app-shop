const express = require('express');
const { getAll, getById, create } = require('../controllers/good');
const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', create);

module.exports = router;