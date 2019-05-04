'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// Routes
const user = require('../src/routes/user');

// Config
const error = require('../config/error');

module.exports = function (app) {
    app.use('/users', user);

};