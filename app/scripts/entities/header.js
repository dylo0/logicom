define(["app", "backbone.picky"], function(AppManager){
  AppManager.module("Entities", function(Entities, AppManager, Backbone, Marionette, $, _){
    Entities.Header = Backbone.Model.extend({
      initialize: function(){
        var selectable = new Backbone.Picky.Selectable(this);
        _.extend(this, selectable);
      }
    });

    Entities.HeaderCollection = Backbone.Collection.extend({
      model: Entities.Header,

      initialize: function(){
        var singleSelect = new Backbone.Picky.SingleSelect(this);
        _.extend(this, singleSelect);
      }
    });

    var initializeHeaders = function() {
        Entities.headers = new Entities.HeaderCollection([
            { name: "Ładunki", url: "packages" },
            { name: "Pojazdy", url: "vehicles" },
            { name: "Chat", url: "chat" },
            { name: "Moje oferty", url: "myoffers" },
            { name: "Forum", url: "discussion" },
            { name: "Więcej", url: "", nestedLinks: [
                { name: "Baza firm", url: "companies" },
                { name: "Kontakty", url: "allcontacts" },
                { name: "Archiwum", url: "archive" }
        ]}
    ]);

      bindNestedCollection(Entities.headers);
    }

    var bindNestedCollection = function (headers) {
        headers.each(function (header) {
            nestedCollection = header.get('nestedLinks');
            if (nestedCollection) {
                linksCollection = new Entities.HeaderCollection(nestedCollection);
                header.set('nestedLinks', linksCollection);
            }
        });
    }


    var API = {
      getHeaders: function(){
        if(Entities.headers === undefined){
          initializeHeaders();
        }
        return Entities.headers;
      }
    };

AppManager.reqres.setHandler("header:entities", function(){
      return API.getHeaders();
    });
  });

  return ;
});
