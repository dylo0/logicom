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
        console.log(credentials);
        AppManager.execute('set:user:info', credentials);

        // waits for contacts initialization for proper application behavior
        var initialized = AppManager.request("initialize:contacts");
        
        // after initialization starts app
        $.when(initialized).done(function () {
           AppManager.startApplication(credentials); 
        });
    });

            // { name: "Ładunki", url: "packages", navigationTrigger: "show:module:packages" },
            // { name: "Pojazdy", url: "vehicles", navigationTrigger: "show:module:vehicles" },
            // { name: "Chat", url: "chat", navigationTrigger: "show:module:chat" },
            // { name: "Moje oferty", url: "myoffers", navigationTrigger: "show:module:myoffers" },
            // { name: "Forum", url: "discussion", navigationTrigger: "show:module:discussion" },
            // { name: "Więcej", url: "", navigationTrigger: "show:module:other", nestedLinks: [
            //     { name: "Baza firm", url: "companies", navigationTrigger: "show:module:companies" },
            //     { name: "Kontakty", url: "allcontacts", navigationTrigger: "show:module:allrcontacts" },
            //     { name: "Archiwum", url: "archive", navigationTrigger: "show:module:archive" }

    AppManager.commands.setHandler('show:module', function (moduleName, args) {
        AppManager.startModule(moduleName, args);
    });

    AppManager.startApplication = function () {
        console.log('starting app');
        // AppManager.loginRegion.destroy();
        console.log('login destroyed');
        AppManager.module("HeaderApp").start();
        AppManager.module("ConversationsApp").start();
        AppManager.module("ContactsApp").start();
        
        AppManager.startModule("ChatApp");   
    };

    AppManager.startModule = function(moduleName, args){
        console.log('starting module');
        var currentApp = moduleName ? AppManager.module(moduleName) : null;
        if (AppManager.currentApp === currentApp){ return; }
        
        if (AppManager.currentApp){
            console.log('stopping module:', AppManager.currentApp)
            AppManager.currentApp.stop();
        }

        AppManager.currentApp = currentApp;
        
        if(currentApp){            
            currentApp.start(args);
            // AppManager.module(moduleName).start();
        }
    };

    return AppManager;
});