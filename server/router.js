'use strict';

module.exports = function (app, express, api) {
	var expressRouter = express.Router();

	expressRouter.get('/', api.getIndex);

	expressRouter.get('/application', isLoggedIn, api.getClientApp);
		
	expressRouter.post('/login', api.login);

	expressRouter.get('/logout', api.logout);

	expressRouter.get('/admin', isAdmin, api.getAdminPanel);

	expressRouter.post('admin/password_reset/ ', api.passwordRecovery);

	expressRouter.get('/admin/companyList', api.getAllCompanies);

	expressRouter.post('/admin/updateCompany', api.updateCompany);

	// other routes get 404
	expressRouter.get('/*',function(req, res) {
      res.send(404);
  	});

  	app.use('/', expressRouter);
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
