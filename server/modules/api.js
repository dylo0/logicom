var path = require('path'),
	companies = require('./companies');

module.exports = function (passport) {
	return {
		getIndex:  function (req, res) {
			res.render('index.ejs', { message: req.flash('loginMessage') })
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
			res.sendfile( path.join( __dirname, '../admin_panel/app/index.html' ) );
		},

		passwordRecovery: function (req, res) {
			companies.passwordRecovery(req, res);
		},
	}
}
