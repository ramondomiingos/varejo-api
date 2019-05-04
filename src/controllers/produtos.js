

const produtos = require('../models/produtos');

exports.get = async function(req, res) {
    try {
        res.status(201).send(await produtos.read(req.params.codigo));
    } catch (e) {
        res.status(e.error.status).send(e)
    }
};