define(["app", "apps/LoadMarket/list/list_controller"], function(AppManager, Controller){
    AppManager.module("LoadMarket", function(LoadMarket, AppManager, Backbone, Marionette, $, _){ 
        LoadMarket.startWithParent = false;

        var API = {
            listMessages: function () {
                console.log('starting load market app')
                LoadMarket.List.Controller.listMessages();
            }
        };

        LoadMarket.on("start", function () {
            API.listMessages();
        });
    });

    return AppManager.LoadMarket;
});