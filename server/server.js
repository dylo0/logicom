'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path'),
    async = require('async'),
    hbs = require('express-hbs'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    router = require('./router'),
    session = require('express-session'),
    redisStore = require('connect-redis')(session),
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


    //////////////////////
    // APPLICATION MODULES
    //////////////////////
    
    var app = require('./app')(express, logicomConfig, path, session, cookieParser, redisStore);

    // user and encryption
    var bcrypt   = require('bcrypt-nodejs'),
        userModel     = require('./models/user')(mongoose, bcrypt),
        passport = require('./config/passport')(app, userModel);

    // webscockets communication module
    var socketIO = require('socket.io'),
        communicator = require('./modules/communicator')(express, socketIO);

    // email module
    var nodemailer  = require('nodemailer'),
        mailer      = require('./modules/mailer')(nodemailer, logicomConfig);

    // companies logic module
    var companyModel  = require('./models/company')(mongoose, userModel),
        companies = require('./modules/companies')(mailer, companyModel);


    // router and it's api
    var api = require('./modules/api')(passport, path, companies),
        router = require('./router')(app, express, api);

    //////////////////////

    // start server
    var server =http.createServer(app)

    
    // bind websockets logic
    communicator.createSocket(server);

    server.listen(app.get('port'), function(){
        console.log('Express App started!');
    });

});


