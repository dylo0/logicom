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
    session = require('express-session'),
    logicomConfig = require('./config/logicomConfig');


// start mongoose

var connectionOptions = {
    user: logicomConfig.dbUser,
    pass: logicomConfig.dbPass
};

mongoose.connect(logicomConfig.databaseURI, connectionOptions);

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


    //////////////////////
    // APPLICATION MODULES
    //////////////////////
    
    var app = require('./app')(express, logicomConfig, path, session, flash);

    // user and encryption
    var bcrypt   = require('bcrypt-nodejs'),
        user     = require('./models/user')(mongoose, bcrypt),
        passport = require('./config/passport')(app, user);

    // webscockets communication module
    var socketIO = require('socket.io'),
        communicator = require('./modules/communicator')(express, socketIO);

    // email module
    var nodemailer  = require('nodemailer'),
        mailer      = require('./modules/mailer')(nodemailer, logicomConfig);

    // companies logic module
    var companies = require('./modules/companies')(mailer);


    // router and it's api
    var api = require('./modules/api')(passport, path, companies),
        router = require('./router')(app, api);

    //////////////////////

    // start server
    var server =http.createServer(app)

    
    // bind websockets logic
    communicator.createSocket(server);

    server.listen(app.get('port'), function(){
        console.log('Express App started!');
    });

});


