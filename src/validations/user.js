'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

const Joi = require('joi');

exports.post = Joi.object().keys({
    first_name: Joi.string().max(50).trim().regex(/^[\sa-zà-úA-ZÀ-Úč-žČ-Ž]{1,200}$/).required(),
    last_name: Joi.string().max(80).trim().regex(/^[\sa-zà-úA-ZÀ-Úč-žČ-Ž]{1,200}$/).required(),
    cpf: Joi.string().length(11).required(),
    sex : Joi.number().integer().min(1).max(3),
    birthdate: Joi.number().integer().positive(),
    email: Joi.string().max(80).email({ minDomainAtoms: 2 }).regex(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/ig),
    verify_email: Joi.any().equal(Joi.ref('email')),
    password: Joi.string().required().min(3).max(30),
    verify_password: Joi.any().equal(Joi.ref('password'))
}).options({
    abortEarly: false
});