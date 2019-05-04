'use strict';

const pg = require('pg');
const connection = require('../config/config');

pg.defaults.parseInt8 = true;

const client = new pg.Client({
    connectionString: "postgres://nrqudhkduadquk:a0e2787a5a8872effa28c24ba82b0bb084bb56386d272bf4b8a5c0a43f3e5fe9@ec2-107-20-177-161.compute-1.amazonaws.com:5432/dfq0kjt0s9keea",
    ssl: true
});

client.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Connection to the established database')
    }
});

module.exports = client;