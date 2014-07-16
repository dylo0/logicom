'user strict';

module.exports = function (passport, path, companies) {
	return {
		getIndex:  function (req, res) {
			res.render('index.ejs')
		},

		getClientApp: function (req, res) {
			res.sendfile( path.join( __dirname, '../../app/app.html' ) );
		},
			
		login: passport.authenticate('local-login', {
			successRedirect : '/application',
			failureRedirect : '/',
			failureFlash : true
		}),

		logout: function (req, res) {
			req.logout();
			res.redirect('/');
		},

		getAdminPanel: function (req, res) {
			res.sendfile( path.join( __dirname, '../../admin_panel/app/index.html' ) );
		},

		passwordRecovery: function (req, res) {
			// todo change req res logic here
			companies.passwordRecovery(req, res);
		},

		// for admin panel only, lists all users
		listAllUsers: function (req, res) {
			companies.getAllUsers(function (userlist) {
				res.json(userlist);
			}, function (err) {
				res.send(err);
			});
		},

		listCompanyUsers: function (req, res) {
			onSuccess = function (data) {
				res.send(data);
			};

			onError = function (err) {
				res.send(500, err);
			};

			companies.listCompanyUsers(req.params.id, onSuccess, onError);
		},

		getAllCompanies: function (req, res) {
			companies.getAll(function (companies) {
				res.json(companies);
			}, function (err) {
				res.send(err);
			});
		},

		updateCompany:function (req, res) {
			var onError = function (err) {
				res.send(500, err);
			};

			var onSuccess = function (data) {
				res.send(data);
			};

			if (req.body._id === undefined) {
				companies.addNew(req.body, onSuccess, onError);
			} else {
				companies.updateCompany(req.body, onSuccess, onError);
			}
		},

		getUserInfo: function (req, res) {
			companies.getUser(req.body._id, function (user) {
				res.send(user);
			}, function (err) {
				res.send(500, err);
			})
		},

		getContactList: function (req, res) {
			// get contactlist for requesting user;
		}
	}
}
