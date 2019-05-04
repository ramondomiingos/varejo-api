'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

// usado para a conexão com o banco de dados postgresql

const pg = require('pg');
const winston = require('../startup/logging');
const connection = require('../config/config');

pg.defaults.parseInt8 = true;

const client = new pg.Client(connection.postgres_digital_ocean);

client.connect((err) => {
    if(err) {
        winston.error(err);
    } else {
        winston.info('Connection to the established database')
    }
});

module.exports = client;