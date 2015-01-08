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
            { name: "Ładunki", url: "loads", module: 'LoadMarket' },
            { name: "Pojazdy", url: "vehicles", module: 'VehicleMarket' },
            { name: "Oferty", url: "offers", module: "Organizer" },
            { name: "Forum", url: "board", module: "Board"},
            { name: "Baza firm", url: "companies", module: "Company"}
        //     { name: "Więcej", url: "", nestedLinks: [
        //         { name: "Baza firm", url: "companies", module: "Company"},
        //         { name: "Kontakty", url: "allcontacts", module: "ContactList"}
        // ]}
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
