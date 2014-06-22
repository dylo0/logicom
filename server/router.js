var path = require('path');

module.exports = function (app, passport) {
	
	app.get('/', function (req, res) {
		res.render('index.ejs', { message: req.flash('loginMessage') })
	});

	app.get('/application', isLoggedIn, function (req, res) {
		res.sendfile( path.join( __dirname, '../app/app.html' ) );
	});
		
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/application',
		failureRedirect : '/',
		failureFlash : true
	}));

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/admin', isAdmin, function (req, res) {
		res.sendfile( path.join( __dirname, '../admin_panel/app/index.html' ) );
	})
}

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// to be implemented...
function isAdmin (req, res, next) {
	// if (req.isAuthenticated() && true) 
		return next();

	res.redirect('/');
}