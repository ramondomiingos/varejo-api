'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// Routes
const user = require('../src/routes/user');
const produtos = require('../src/routes/produtos');
const modelos = require('../src/routes/modelo');


module.exports = function (app) {
    app.use('/usuarios', user);
    app.use('/produtos', produtos);
    app.use('/modelos', modelos);

};