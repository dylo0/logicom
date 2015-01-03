define(['backbone', 'backbone.marionette'], function ( Backbone) {
    AppManager = new Backbone.Marionette.Application();

    AppManager.addRegions({
        headerRegion:           "#header-region",
        mainRegion:             "#main-region",
        sidebarRegion:          "#sidebar",
        conversationsRegion:    "#conversations-region",
        // loginRegion:            "#login"
    });

    AppManager.addInitializer( function () {
        // AppManager.module("LoginApp").start(); 
        // AppManager.module("HeaderApp").start();
        // AppManager.startModule('LoadMarket');

        // Mocked login for development
        AppManager.trigger('login:success', {id: 17, username: "Tomasz"})

    });

    AppManager.on('login:success', function (credentials) {
        AppManager.execute('set:user:info', credentials);

        // waits for contacts initialization for proper application behavior
        var initialized = AppManager.request("initialize:contacts");
        
        // after initialization starts app
        $.when(initialized).done(function () {
           AppManager.startApplication(credentials); 
        });
    });

    AppManager.commands.setHandler('show:module', function (module, args) {
        AppManager.startModule(module, args);
    });

    AppManager.startApplication = function () {
        AppManager.module("HeaderApp").start();
        AppManager.module("ConversationsApp").start();
        AppManager.module("ContactsApp").start();

        var modules = AppManager.request("header:entities");
        var firstModule = {
            name: modules.models[0].get("module"),
            url: modules.models[0].get("url")
        };

        AppManager.startModule(firstModule);
    };

    AppManager.startModule = function(module, args){
        var currentApp = module.name ? AppManager.module(module.name) : null;
        if (AppManager.currentApp === currentApp){ return; }
        
        if (AppManager.currentApp){
            AppManager.currentApp.stop();
        }
        
        AppManager.execute("set:active:header", module.url);
        AppManager.currentApp = currentApp;
        
        if(currentApp){            
            currentApp.start(args);
        }
    };

    return AppManager;
});