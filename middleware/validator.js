'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// configuracoes das funcoes de validação do JOI

const Joi = require('joi');
const error = require('../config/error');

exports.validateBody = function (schema) {
	return function(req, res, next) {
		const body = req.body;
		Joi.validate(body, schema, function (err) {
			if (err) {
				let label = {};
				err.details.forEach(function (item) {
					label[item.path[0]] = item.message
				});
				error.JOI_ERROR.error.detail = label;
				res.status(error.JOI_ERROR.error.status).send(error.JOI_ERROR);
			} else {
				next();
			}
		});
	}
};

exports.validateParams = function (schema) {
	return function(req, res, next) {
		const params = req.params;
		Joi.validate(params, schema, function (err) {
			if (err) {
				let label = {};
				err.details.forEach(function (item) {
					label[item.path[0]] = item.message
				});
				error.JOI_ERROR.error.detail = label;
				res.status(error.JOI_ERROR.error.status).send(error.JOI_ERROR);
			} else {
				next();
			}
		});
	}
};

exports.validateQuery = function (schema) {
	return function(req, res, next) {
		const query = req.query;
		Joi.validate(query, schema, function (err) {
			if (err) {
				let label = {};
				err.details.forEach(function (item) {
					label[item.path[0]] = item.message
				});
				error.JOI_ERROR.error.detail = label;
				res.status(error.JOI_ERROR.error.status).send(error.JOI_ERROR);
			} else {
				next();
			}
		});
	}
};

exports.validateHeader = function (schema) {
	return function(req, res, next) {
		const headers = req.headers;
		Joi.validate(headers, schema, function (err) {
			if (err) {
				let label = {};
				err.details.forEach(function (item) {
					label[item.path[0]] = item.message
				});
				error.JOI_ERROR.error.detail = label;
				res.status(error.JOI_ERROR.error.status).send(error.JOI_ERROR);
			} else {
				next();
			}
		});
	}
};

exports.validateFile = function (schema) {
	return function(req, res, next) {
		const file = req.file;
		Joi.validate(file, schema, function (err) {
			if (err) {
				let label = {};
				err.details.forEach(function (item) {
					label[item.path[0]] = item.message
				});
				error.JOI_ERROR.error.detail = label;
				res.status(error.JOI_ERROR.error.status).send(error.JOI_ERROR);
			} else {
				next();
			}
		});
	}
};

exports.validate = (body, schema) => new Promise((resolve, reject) => {
	Joi.validate(body, schema, function (err) {
		if (err) {
			let label = {};
			err.details.forEach(function (item){
				label[item.path[0]] = item.message
			});
			error.JOI_ERROR.error.detail = label;
			reject(error.JOI_ERROR);
		}
		else resolve(true)
	});
});