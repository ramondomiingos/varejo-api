const postgres = require('../../connections/postgres');

exports.read = (item) => new Promise((resolve, reject) => {
    const sql = " SELECT * FROM varejo.produto WHERE produto.codigo = $1";
    postgres.query(sql, item.codigo,
        async function (err, result) {
            if (err) {
                reject(err);
            } else if (result.rowCount === 1) {
                resolve(result.rows[0]);
            }
        });
});