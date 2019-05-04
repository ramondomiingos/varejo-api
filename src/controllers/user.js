'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

const user = require('../models/user');

exports.post = async function(req, res) {
    try {
        res.status(201).send({ message: 'Success => POST' });
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
