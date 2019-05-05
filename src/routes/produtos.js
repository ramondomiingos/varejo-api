'use strict';

const router = require ('express').Router();
const controller = require('../controllers/produtos');

// router.get('/', controller.getAll);
router.get('/:codigo', controller.get);

module.exports = router;