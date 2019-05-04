'use strict'

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

const postgres = require('../../connections/postgres');
const error = require('../../config/error')
const winston = require('../../startup/logging');

exports.create= (parametros) => new Promise((resolve, reject) => {
    const sql = "SQL";
    postgres.query(sql, [
        parametros
    ],
    async function (err, result) {
        if (err) {
            winston.error(err);
            reject(error.INTERNAL_ERROR);
        } else if (result.rowCount === 1) {
            resolve({ message: "Success" });
        }
    });
});