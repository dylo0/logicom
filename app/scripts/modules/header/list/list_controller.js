define(["app", "modules/header/list/list_view"], function(ContactManager, View){
    AppManager.module("HeaderApp.List", function(List, AppManager, Backbone, Marionette, $, _){
        List.Controller = {
            listHeader: function(){
                require(["entities/header"], function(){
                    var links = ContactManager.request("header:entities");
                    var headers = new View.Headers({collection: links});

                    headers.on("childview:navigate", function(childView, model){
                        var url = model.get("url");
                        var module = model.get("module");

                        AppManager.execute("show:module", module);
                        AppManager.execute("set:active:header", url);
                    });

                    AppManager.headerRegion.show(headers);
                });
            },

            setActiveHeader: function(headerUrl){
                var links = ContactManager.request("header:entities");
                var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
                headerToSelect.select();
                links.trigger("reset");
            }
        };
    });

  return AppManager.HeaderApp.List.Controller;
});
