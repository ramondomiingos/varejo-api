'use strict'

/**
 * Created by Tawan Silva on 04/05/19
 * tawan.sf.99@gmail.com
*/

const postgres = require('../../connections/postgres');
const error = require('../../config/error')

exports.login = (body) => new Promise((resolve, reject) => {
    const sql = "SELECT id, username, role FROM varejo.usuario WHERE username=$1 AND password=$2";
    postgres.query(sql, [
        body.usuario,
        body.senha
    ],
    async function (err, result) {
        if (err) {
            console.log(err)
            reject(error.INTERNAL_ERROR);
        } else if (result.rowCount === 0) {
            reject(error.USER_NOT_FOUND);
        } else if (result.rowCount === 1) {
            resolve(result.rows[0]);
        } 
    });
});