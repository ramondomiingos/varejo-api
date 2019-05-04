'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// Routes
const user = require('../src/routes/user');
const produtos = require('../src/routes/produtos');


module.exports = function (app) {
    app.use('/users', user);
    app.use('/produtos', produtos);

};