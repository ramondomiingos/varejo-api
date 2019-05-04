'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// Routes
const user = require('../src/routes/user');

// Config
// const authorization = require('../middleware/app_authorization');
const error = require('../config/error');

module.exports = function (app) {

    app.use('/users', authorization, user);
	
	app.use('*', function(req, res) {
		res.status(error.METHOD_NOT_ALLOWED.error.status).send(error.METHOD_NOT_ALLOWED);
	});
};