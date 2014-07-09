'use strict';

module.exports = function (app, api) {
	
	app.get('/', api.getIndex);

	app.get('/application', isLoggedIn, api.getClientApp);
		
	app.post('/login', api.login);

	app.get('/logout', api.logout);

	app.get('/admin', isAdmin, api.getAdminPanel);

	app.post('admin/password_reset/ ', api.passwordRecovery);

	app.get('/admin/companyList', api.getAllCompanies);

	app.post('/admin/updateCompany', api.updateCompany);

	// other routes get 404
	app.get('/*',function(req, res) {
      res.send(404);
  	});
}

// to be implemented...
function isLoggedIn (req, res, next) {
	// if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// to be implemented...
function isAdmin (req, res, next) {
	// if (req.isAuthenticated() && true) 
		return next();

	res.redirect('/');
}
