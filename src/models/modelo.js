'use strict'

/**
 * Created by Tawan Silva on 04/05/19
 * tawan.sf.99@gmail.com
 */

const postgres = require('../../connections/postgres');
const error = require('../../config/error')

exports.readModel = (body) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM varejo.produto WHERE 1=1";
    if (body.tipo_produto != null) {
        sql += " AND tipo_produto='"+body.tipo_produto+"'";
    }
    if (body.cor != null) {
        sql += " OR cor='"+body.cor+"'";
    }
    if (body.tamanho != null) {
        sql += " OR tamanho='"+body.tamanho+"'";
    }
    if (body.modelo != null) {
        sql += " OR modelo='"+body.modelo+"'";
    }
    if (body.codigo != null) {
        sql += " AND codigo='"+body.codigo+"'";
    }
    console.log(sql)
    postgres.query(sql,
    async function (err, result) {
        if (err) {
            console.log(err);
            reject(error.INTERNAL_ERROR);
        } else if (result.rowCount === 0) {
            reject(error.MODEL_NOT_FOUND);
        } else if (result.rowCount === 1) {
            resolve(result.rows[0]);
        } else {
            reject(error.FATAL_ERROR);
        }
    });
});