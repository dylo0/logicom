'use strict';

module.exports = {
	setupRoutes: function (app) {
		app.get('/', this.getIndex);
	},

	getIndex: function (req, res) {
		res.sendfile( path.join( __dirname, '../app/index.html' ) );
	}
}