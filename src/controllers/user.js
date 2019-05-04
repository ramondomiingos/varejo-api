'use strict';

/**
 * Created by Tawan Silva on 04/05/19
 * tawan.sf.99@gmail.com
 */

const user = require('../models/user');

exports.post = async function(req, res) {
    const body = {
        usuario: req.body.usuario,
        senha: req.body.senha
    }

    try {
        res.status(200).send(await user.login(body));
    } catch (e) {
        res.status(e.error.status).send(e)
    }
};

exports.get = async function(req, res) {
    try {
        res.status(200).send({ message: 'Success => GET' });
    } catch (e) {
        res.status(e.error.status).send(e);
    }
};
