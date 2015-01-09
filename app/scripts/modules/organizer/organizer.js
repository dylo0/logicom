define(["app", "modules/Organizer/list/list_controller"], function(AppManager, Controller){
    AppManager.module("Organizer", function(Organizer, AppManager, Backbone, Marionette, $, _){ 
        Organizer.startWithParent = false;

        var API = {
            listMessages: function () {
                console.log('starting load market app')
                Organizer.List.Controller.listMessages();
            }
        };

        Organizer.on("start", function () {
            API.listMessages();
        });
    });

    return AppManager.Organizer;
});