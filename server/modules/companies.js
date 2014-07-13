'use strict';

// 
// Module for handling user and companies functions
// 

module.exports = function (mailer, companyModel) {
	return {
		// lists all companies and it's users
		getAll: function (cb, onError) {
			console.log('getall');
			companyModel.find(function (err, companies) {
				console.log('got companies');
				console.log(companies);
				if (err) {
					onError(err);
				} else {
					cb(companies);
				}
		    });
		},

		// gets user data, removes password from model before sending
		getUser: function (data) {
			// body...
		},

		// add company to db, for each user sends new user request
		addNew: function (data, cb, onError) {
			console.log(data);
			data.users.forEach(function (user) {
				requestNewUser(user);
			});

			var company = new companyModel(data);
			company.save(function (err) {
				if (err) { 
					onError(err);
				} else {
					cb();
				}
			});
		},

		// Updates company model
		// check if new users are added (new users dont have _id)
		// if so requests new users 
		updateCompany: function (data) {
			// body...
		},

		// generate password uri, and send it to his email
		requestNewUser: function (data) {
			console.log(data);
		},

		// executed after email confirmation and creation of password
		// adds new user to both company model and users table
		// password are added only for allUsers table
		addUser: function (data) {
			
		},

		// updates both companyModel and userModel
		updateUser: function (data) {
			// body...
		},

		// generates link, so company users can enter their passwords
		generatePasswordURI: function (data) {
			
		},

		// send reset password link to user
		passwordRecovery: function (data) {
			console.log(req.body)
			// TODO
			// find user in db, add param 'requested new password' to db
		},

		resetPassword: function (data) {
			//
		},

		setUserPassword: function () {
			
		}

	};
};