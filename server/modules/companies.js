'use strict';

// 
// Module for handling user and companies functions
// 

module.exports = function (mailer, companyModel, userModel) {
	// generate password uri, and send it to his email
	var requestNewUser = function (data) {
			// for now just assigns new user models.
			console.log('requesting new user');
			// var user = new userModel(data);
			// cb(user);
		};

	return {
		// lists all companies and it's users
		getAll: function (cb, onError) {
			companyModel.find(function (err, companies) {
				if (err) {
					onError(err);
				} else {
					cb(companies);
				}
		    });
		},

		// gets user data, removes password from model before sending
		getUser: function (mongoId, cb, onError) {
			userModel.findOne({_id: mongoId}, function (err, user) {
				if (err) {
					return onError(err);
				} 

				// removes user credentials before sending data
				delete user.local;

				return cb(user);
			})
		},

		// gets all users, removes passwords, and returns list
		getAllUsers: function (cb, onError) {
			userModel.find({}, function (err, users) {
				if (err) {
					return onError(err);
				}

				users.forEach(function (user) {
					delete user.local;
				});

				cb(users);
			});
		},

		listCompanyUsers: function (mongoId, cb, onError) {
			console.log('listing users for mongoId:', mongoId);

			var users = [{
		        logicomId: 1235123,
		        name: 'Tomasz',
		        surname: 'Dyl',
		        email: 'tomasz@mailinator.com',
		        phone: '32 124 12 123',
		        fax: '43 231 12312',
		        func: '-',
		        company: 'logicom'
		      },
		      {
		        logicomId: 1235123,
		        name: 'Lukasz',
		        surname: 'Maciejewski',
		        email: 'lukasz@mailinator.com',
		        phone: '32 543 15 21',
		        fax: '33 654 45 44',
		        func: 'Spedytor',
		        company: 'mailinator'
		      },
		      {
		        logicomId: 1235123,
		        name: 'Patryk',
		        surname: 'Stefanik',
		        email: 'biuro@asd.com',
		        phone: '11 22 242 12 54',
		        fax: '11 23 423 23 12',
		        func: 'Wlasciciel',
		        company: 'asd'
		      }];
		      
		    cb(users);
		},

		// add company to db, for each user sends new user request
		addNew: function (data, cb, onError) {			 

			data.users.forEach(function (user) {
				requestNewUser(user);
			});

			// users are added to db after email confirmation
			data.users = [];

			var company = new companyModel(data);
			
			company.save(function (err, company) {
				if (err) { 
					onError(err);
				} else {
					cb(company);
				}
			});
		},

		// Updates company model
		// check if new users are added (new users dont have _id)
		// if so requests new users 
		updateCompany: function (data, cb, onError) {
			console.log('updating company!');
			if (data._id === undefined) {
				return onError('company not found');
			}

			var existingUsers = [],
				companyId = data._id;

			data.users.forEach(function (user) {
				if (!user._id) {
					requestNewUser()
				} else {
					existingUsers.push(user);
				}
			});

			data.users = existingUsers;

			delete data._id

			companyModel.update({_id : companyId}, data, function (err) {
				if (err) {
					onError(err);
				} else {
					data._id = companyId;
					cb(data);
				}
			});
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