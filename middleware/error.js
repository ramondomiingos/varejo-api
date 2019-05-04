'use strict';

/**
 * Created by Tawan Silva on 25/03/19
 * tawan.sf.99@gmail.com
 */

//  ainda n sei onde é usado :(

const winston = require('winston');

module.exports = function(err, req, res, next){

	if (req.statusCode === 404){
		res.status(405).send();
	} else {
		res.status(500).send({ error: 'Internal Server Error.'});
	}

};
