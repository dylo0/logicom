define(["app"], function(AppManager){
 	AppManager.module("Entities", function(Entities, AppManager, Backbone, Marionette, $, _){
	    Entities.Loads = Backbone.Model.extend({
    		initialize: function() {
				if (this.isNew()) {
					var sendTime = new Date();
					this.set('created', sendTime.getHours() + ':' + 
					  				   (sendTime.getMinutes()<10?'0':'') + sendTime.getMinutes());
				}
			},

			defaults: {
				msg: 		'',
				created: 	0,
				sendTime:   '0' 
			}
	    });
		
	    Entities.LoadsCollection = Backbone.Collection.extend({
	    	model: Entities.Loads
	    });

	    var initializeMessages = function () {
	    	var messages = new Entities.MessageCollection([
	    		{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
	    	]);

	    	return messages.models;
	    }

		var API = {
			getMessageEntities: function () {
				var models = initializeMessages();
				var messages = new Entities.MessageCollection(models);
				console.log('getting enetities laods')
				return messages;
			},
		};


	    AppManager.reqres.setHandler("Loads:entities", function(){
	      return API.getMessageEntities();
	    });

	    AppManager.reqres.setHandler("chat:entity:new", function(){
	      return new Entities.Message();
	    });
	});

	return;
});