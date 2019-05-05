'use strict';

/**
* Created by Tawan Silva on 04/05/19
* tawan.sf.99@gmail.com
*/

const modelo = require('../models/modelo');

exports.get = async function(req, res) {
    
    const params = {
        tipo_produto: req.query.tipo_produto,
        cor: req.query.cor,
        tamanho: req.query.tamanho,
        modelo: req.query.modelo,
        codigo: req.query.codigo
    }
    try {
        res.status(200).send(await modelo.readModel(params));
    } catch (e) {
        res.status(e.error.status).send(e);
    }
};
