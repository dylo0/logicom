'use strict';

module.exports = function (express, config, path, session, cookieParser, redisStore) {
	var app = express();

    app.set('port', config.port);
	app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');


    // app.use('/api/v1', baucis());

	// simple log
	app.use(function(req, res, next){
	  console.log('%s %s', req.method, req.url);
	  next();
	});

	// mount static
	app.use(express.static( path.join( __dirname, '../app') ));
	app.use('/admin', express.static( path.join( __dirname, '../admin_panel/app') ));
	app.use(express.static( path.join( __dirname, '../.tmp') ));

	// reqired for passport 
	app.use( cookieParser() );
	app.use(session({ store: new redisStore(), secret: config.sessionSecret })); // session secret

	return app;
}