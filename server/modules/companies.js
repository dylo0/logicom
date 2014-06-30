'use strict';

// 
// Module for handling user and companies functions
// 

module.exports = function (mailer, companyModel) {
	return {
		passwordRecovery: function (req, res) {
			console.log(req.body)
			// TODO
			// find user in db, add param 'requested new password' to db
		}
	};
};