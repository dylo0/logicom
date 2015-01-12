define(["app"], function(AppManager){
 	AppManager.module("Entities", function(Entities, AppManager, Backbone, Marionette, $, _){	
	   	Entities.Credential = Backbone.Model.extend({
	   		defaults: {
	   			id: 0,
	   			username: ''
	   		}
	   	});

		var API = {
			getCredentialEntity: function () {
				return new Entities.Credential();
			},

			getUserInfo: function () {
		        return Entities.credentials;
		    },

		    setUserInfo: function (credentials) {
		        Entities.credentials = credentials;      
		    }
		};

	    AppManager.reqres.setHandler("credential:new", function() {
	      return API.getCredentialEntity();
	    });

       	AppManager.commands.setHandler('set:user:info', function (credentials) {
        	console.log('usser info set');
        	API.setUserInfo(credentials);
        });

	    AppManager.reqres.setHandler('get:user:info', function () {
        	return API.getUserInfo();
        });
	});

	return;
});
