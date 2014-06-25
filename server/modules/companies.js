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
		},

		getAll: function (req, res) {
			return companyModel.find(function (err, companies) {
		      if (err) return res.send(err);
		      return res.json(companies);
		    });
		},

		addCompany: function (data) {
			
		}
	};
};