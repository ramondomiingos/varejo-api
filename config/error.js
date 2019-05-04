'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// arquivo de errors personalizado  

let errors = {};

errors.INTERNAL_ERROR = {
	error: {
		status : 500,
		code: 'IEx0001',
		title: 'Internal server error',
		detail: 'There was an unknown internal server error.'
	}
};

errors.FATAL_ERROR = {
	error: {
		status : 500,
		code: 'IEx0002',
		title: 'Fatal error',
		detail: 'There was an unknown error.'
	}
};

module.exports = errors;