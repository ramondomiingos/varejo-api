'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

//  aqui fica as funcoes genericas

const postgres = require ('../connections/postgres');
const winston = require('../startup/logging');
const error = require('../config/error');

exports.nomeDaFuncao = (parametro) => new Promise((resolve, reject) => {
    const sql = "SQL";
    postgres.query(sql,[
        parametro
    ], function (err, result) {
        if (err) {
            winston.error(err);
            reject(error.INTERNAL_ERROR);
        } else if (result.rowCount === 1) {
            resolve(true);
        } else if (result.rowCount === 0) {
            reject(error.INTERNAL_ERROR);
        } else {
            reject(error.FATAL_ERROR);
        }
    });
});