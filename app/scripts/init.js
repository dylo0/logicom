require.config({

    baseUrl: "/scripts",

    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main'],


    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        ionsound: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        "backbone.picky": ["backbone"],
        "backbone.syphon": ["backbone"]
    },

    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',

        // picky and syphon
        "backbone.picky": 'vendor/backbone.picky',
        "backbone.syphon": 'vendor/backbone.syphon',

        select2: '../bower_components/select2/select2.min',
        datatables: '../bower_components/datatables/media/js/jquery.dataTables',

        'backbone.modal': '../bower_components/bakcbone-modal/backbone.modal',
        'backbone.marionette.modals': '../bower_components/bakcbone-modal/backbone.marionette.modals',

        //alias for ionsound
        ionsound: 'vendor/ion.sound.min',

        //alias for socket.io
        socketio: '//cdn.socket.io/socket.io-1.0.6',
        
        /* alias the bootstrap js lib */
        bootstrap: 'vendor/bootstrap',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs'
    },

    hbs: {
        disableI18n: true
    }
});
