'use strict';

var express = require('express'),
	http = require('http'),
	path = require('path'),
	async = require('async'),
	hbs = require('express-hbs'),
	flash    = require('connect-flash'),
	baucis = require('baucis'),
	mongoose = require('mongoose'),
	router = require('./router'),
	communicator = require('./modules/communicator'),
	passport = require('passport'),
	session = require('express-session');


// start mongoose
mongoose.connect('mongodb://localhost/sit');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

	/* test schema */
    var testSchema = new mongoose.Schema({
        test: String
    });

    var Test = mongoose.model( 'test', testSchema );

    /* set Baucis */
    baucis.rest({
        singular: 'test'
    });

	var app = express();

	app.configure(function(){
	    app.set('port', 9000);
		app.set('views', __dirname + '/views');
	    app.set('view engine', 'ejs');
	    // app.set('views', __dirname + '../app/scripts/views');
	});

    // app.use('/api/v1', baucis());

	// simple log
	app.use(function(req, res, next){
	  console.log('%s %s', req.method, req.url);
	  next();
	});

	// mount static
	app.use(express.static( path.join( __dirname, '../app') ));
	app.use(express.static( path.join( __dirname, '../.tmp') ));

	// reqired for passport 
	app.use( express.cookieParser() );
	app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session


	require('./config/passport')(passport); // pass passport for configuration

	require('./router')(app, passport);

	// start server
	var server =http.createServer(app)

	
	// bind websockets logic
	communicator.createSocket(server);

	server.listen(app.get('port'), function(){
	    console.log('Express App started!');
	});

});


