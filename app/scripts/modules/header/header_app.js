define(["app", "modules/header/list/list_controller"], function(AppManager, Controller){
    AppManager.module("HeaderApp", function(HeaderApp, AppManager, Backbone, Marionette, $, _){ 
        HeaderApp.startWithParent = false;

        var API = {
            showHeaders: function () {
                HeaderApp.List.Controller.listHeader();
            },

            setActiveHeader: function (url) {
                HeaderApp.List.Controller.setActiveHeader(url)
            }
        };

        HeaderApp.on("start", function () {
            API.showHeaders();
        });

        AppManager.commands.setHandler("set:active:header", function(url){
            API.setActiveHeader(url);
        });
    });

    return AppManager.LoginApp;
});