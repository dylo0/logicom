define(['backbone', 'backbone.marionette'], function ( Backbone) {
    AppManager = new Backbone.Marionette.Application();

    AppManager.addRegions({
        headerRegion:           "#header-region",
        mainRegion:             "#main-region",
        sidebarRegion:          "#sidebar",
        conversationsRegion:    "#conversations-region",
        loginRegion:            "#login"
    });

    AppManager.addInitializer( function () {
        AppManager.module("LoginApp").start(); 
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

            // { name: "Ładunki", url: "packages", navigationTrigger: "show:module:packages" },
            // { name: "Pojazdy", url: "vehicles", navigationTrigger: "show:module:vehicles" },
            // { name: "Chat", url: "chat", navigationTrigger: "show:module:chat" },
            // { name: "Moje oferty", url: "myoffers", navigationTrigger: "show:module:myoffers" },
            // { name: "Forum", url: "discussion", navigationTrigger: "show:module:discussion" },
            // { name: "Więcej", url: "", navigationTrigger: "show:module:other", nestedLinks: [
            //     { name: "Baza firm", url: "companies", navigationTrigger: "show:module:companies" },
            //     { name: "Kontakty", url: "allcontacts", navigationTrigger: "show:module:allrcontacts" },
            //     { name: "Archiwum", url: "archive", navigationTrigger: "show:module:archive" }

    AppManager.commands.setHandler('start:subapplication', function (appname, args) {
        AppManager.startSubApp(appName, args)
    });

    AppManager.startApplication = function () {
        AppManager.loginRegion.close();
        AppManager.module("HeaderApp").start();
        AppManager.module("ConversationsApp").start();
        AppManager.module("ContactsApp").start();
        AppManager.startSubApp("ChatApp");
    };

    AppManager.startSubApp = function(appName, args){
        var currentApp = appName ? AppManager.module(appName) : null;
        if (AppManager.currentApp === currentApp){ return; }

        if (AppManager.currentApp){
            AppManager.currentApp.stop();
        }

        AppManager.currentApp = currentApp;
        
        if(currentApp){
            AppManager.execute("set:active:header", "packages");
            currentApp.start(args);
        }
    };

    return AppManager;
});