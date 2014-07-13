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

		// for admin panel only
		getAllUsers: function (req, res) {
			companies.getAllUsers(function (userlist) {
				// body...
			});
		},

		getAllCompanies: function (req, res) {
			companies.getAll(function (companies) {
				console.log(companies);
			});
		},

		updateCompany:function (req, res) {
			console.log('request', req.body);

			if (req.body._id === 'undefined') {
				companies.addNew(req.body);
			} else {
				companies.updateCompany(req.body);
			}
		},

		getUserInfo: function (req, res) {
			companies.getUser(req, res)
		},

		getContactList: function (req, res) {
			// get contactlist for requesting user;
		}
	}
}
