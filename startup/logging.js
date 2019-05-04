'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

const { createLogger, format, transports } = require('winston');
const moment = require('moment');

const date = moment().utcOffset('-0300').format('YYYY-MM-DD HH:mm');

const logFormat = format.combine(
	format.timestamp(),
	format.printf(info => `${date} ${info.level} : ${info.message}`),
);

const logger = createLogger({

	format: logFormat,

	transports: [
		new transports.Console(),
		new transports.File({ filename: 'logging.log' })
	],
	exitOnError: false
});

module.exports = logger;
