'use strict';

// 
// Module for handling user and companies functions
// 

require('./mailer');

module.exports = {
	passwordRecovery: function (req, res) {
		console.log(req.body)
		// TODO
		// find user in db, add param 'requested new password' to db
	}
}