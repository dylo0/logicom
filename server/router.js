'use strict';

module.exports = function (app, passport) {
	
	app.get('/', function (req, res) {
		res.render(index.ejs)
	});

	app.get('/application', isLoggedIn, function (req, res) {
		res.sendfile( path.join( __dirname, '../app/app.html' ) );
	});

	app.post('/login',  passport.authenticate('local-login'), {
		successRedirect: '/application',
		failureRedirect: '/',
		failureFlash: true
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
}

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}