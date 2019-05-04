'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/', controller.post);
router.get('/', controller.get);

module.exports = router;