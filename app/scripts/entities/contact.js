define(["app"], function(AppManager){
 	AppManager.module("Entities", function(Entities, AppManager, Backbone, Marionette, $, _){
	    Entities.User = Backbone.Model.extend({
			initialize: function () {
				messages = this.get('messages');
				this.messages = new Entities.MessageCollection(messages);
				this.unset('messages');
			},

			defaults: {
				id: 0,
				username: 'Tomasz'
			}
	    });
		
	    Entities.UserCollection = Backbone.Collection.extend({
	    	model: Entities.User
	    });

	    Entities.getContact = function (id) {
            var found;
            var contacts = API.getUserEntities();
            
            $.when(contacts).done(function () {
	            contacts.each(function (contact) {
	                if (contact.get('id') == id) {
	                    found = contact;
	                }
	            });            	
            });

            return found;

            // TODO add fetch contact credentials from server if not found
            // (Case of message from unknown user );
        };

	    Entities.removeUser = function (id) {
	    	user = Entities.getContact(id);
	    	Entities.AllContacts.remove(user);
	    };

	    Entities.getMockedUsers = function () {
	    	return new Entities.UserCollection([
	    		{id:1, username: "Miłosz Kozłowski", name: "Miłosz", surname: "Kozłowski", company:"Magna Architectural Design", adres: "ul. Grodzickiego Tadeusza 33", kod: "20-256", miasto: "Lublin"}, 
	    		{id:2, username: "Ludwik Dudek", name: "Ludwik", surname: "Dudek", company:"Pak and Save", adres: "ul. Dobrzańskiego Bohdana 57", kod: "20-587", miasto: "Lublin"}, 
	    		{id:3, username: "Eugeniusz Pawlake", name: "Eugeniusz", surname: "Pawlake", company:"A Plus Lawn Care", adres: "ul. Kowalówki Henryka 24", kod: "61-695", miasto: "Poznań"},
	    		{id:4, username: "Karina Sokołowska", name: "Karina", surname: "Sokołowska", company:"Fit Tonic", adres: "", kod: "", miasto: ""},
	    		{id:5, username: "Grzegorz Zawadzki", name: "Grzegorz", surname: "Zawadzki", company:"William Wanamaker & Sons", adres: "", kod: "", miasto: ""},
	    		{id:6, username: "Eligiusz Szczepański", name: "Eligiusz", surname: "Szczepański", company:"Boys Markets", adres: "ul. Skargi Piotra 103", kod: "71-422", miasto: "Szczecin"},
	    		{id:7, username: "Amadej Kozłowski", name: "Amadej", surname: "Kozłowski", company:"Red Owl", adres: "ul. Gościeradzka 35", kod: "85-556", miasto: "Bydgoszcz"},
	    		{id:8, username: "Jozafat Jaworski", name: "Jozafat", surname: "Jaworski", company:"Canal Villere", adres: "ul. Kozielska 32", kod: "93-360", miasto: "Łódź"},
	    		{id:9, username: "Tadeusz Pawłowski", name: "Tadeusz", surname: "Pawłowski", company:"Frame Scene", adres: "ul. Metalowa 24", kod: "60-118", miasto: "Poznań"},
	    		{id:10, username: "Mariusz Sokołowski", name: "Mariusz", surname: " Sokołowski", company:"Record World", adres: "ul. Wiosny Ludów 122", kod: "81-459", miasto: "Gdynia"},
	    		{id:11, username: "Kuba Wysocki", name: "Kuba Wysocki", surname: " Wysocki", company:"Pleasures and Pasttimes", adres: "ul. Nowogrodzka 21", kod: "00-658", miasto: "Warszawa"},
	    		{id:12, username: "Kondrat Borkowski", name: "Kondrat", surname: " Borkowski", company:"Total Yard Maintenance", adres: "ul. Limbowa 61", kod: "75-669", miasto: "Koszalin"},
	    		{id:13, username: "Jaropełk Nowak", name: "Jaropełk", surname: "Nowak", company:"Incredible Universe", adres: "ul. Pińska 5", kod: "03-523", miasto: "Warszawa"},
	    		{id:14, username: "Józefa Maciejewska", name: "Józefa", surname: "Maciejewska", company:"Corinthian Designs", adres: "ul. Pocztowa 121", kod: "58-500", miasto: "Jelenia Góra"},
	    		{id:15, username: "Mieczysław Dąbrowski", name: "Mieczysław", surname: "Dąbrowski", company:"The Jolly Farmer", adres: "ul. Wesoła 119", kod: "60-598", miasto: "Poznań"},
	    		{id:16, username: "Fryderyk Nowakowski", name: "Fryderyk", surname: " Nowakowski", company:"Galyan's", adres: "ul. Janikowska 79", kod: "61-070", miasto: "Poznań"},
	    		{id:17, username: "Mieczysław Kalinowski", name: "Mieczysław", surname: " Kalinowski", company:"Access Asia", adres: "ul. Brodnicka 83", kod: "04-960", miasto: "Warszawa"},
	    		{id:18, username: "Frydryk Kalinowski", name: "Frydryk", surname: " Kalinowski", company:"The Spotted Cougar", adres: "ul. Kadłubka Wincentego 113", kod: "93-244", miasto: "Łódź"},
	    		{id:19, username: "Korneli Kucharski", name: "Korneli", surname: " Kucharski", company:"Sherman's", adres: "ul. Truskawkowa 51", kod: "65-129", miasto: "Zielona Góra"},
	    		{id:20, username: "Rościsława Walczak", name: "Rościsława", surname: "Walczak", company:"Fradkin Brothers Furniture", adres: "ul. Wolumen 135", kod: "01-912", miasto: "Warszawa"},
	    		{id:21, username: "Waleria Duda", name: "Waleria", surname: "Duda", company:"Sports Town USA", adres: "ul. Kownackiej Marii 74", kod: "92-608", miasto: "Łódź"},
	    		{id:22, username: "Janusz Tomaszewski", name: "Janusz", surname: "Tomaszewski", company:"Isaly's", adres: "ul. Mydlarska 33", kod: "80-833", miasto: "Gdańsk"},
	    		{id:23, username: "Aleksander Dąbrowski", name: "Aleksander", surname: "Dąbrowski", company:"Your Choices", adres: "ul. Oliwska 35", kod: "60-454", miasto: "Poznań"},
	    		{id:24, username: "Marek Wieczorek", name: "Marek", surname: "Wieczorek", company:"10,000 Auto Parts", adres: "ul. Biegunowa 63", kod: "94-215", miasto: "Łódź"},
	    		{id:25, username: "Rafał Michalski", name: "Rafał", surname: "Michalski", company:"Bumper to Bumper Auto Parts", adres: "ul. Kokosowa 22", kod: "85-363", miasto: "Bydgoszcz"},
	    	]);
	    }


	    Entities.initializeUsers = function () {
	    	var users = AppManager.request('user:list');
	    	var defer = $.Deferred();

	    	// lacks error handling for now
	    	users.done(function (entities) {
	    		var allusers = new Entities.UserCollection();
	    		var hostID = AppManager.request('get:user:info').id;

	    		_.each(entities, function (username, id) {
					if (id != hostID) {
		    			model = new Entities.User({
		    				id: id,
		    				username: username
		    			});
		    		
		    			allusers.add(model);
		    		}
	    		});

				// mocked for dev purposes
				// Entities.AllContacts = allusers;
				Entities.AllContacts = Entities.getMockedUsers();
				defer.resolve();
	    	});

	    	return defer.promise();
	    };


		var API = {
			initializeUsers: function () {
				return Entities.initializeUsers();
			},

			getUserEntities: function () {
				return Entities.AllContacts;
			},

			getContactEntity: function (id) {
				return Entities.getContact(id);
			},

			addUser: function (data) {
				var user = new Entities.User(data);
				Entities.AllContacts.add(user);
			},

			removeUser: function (id) {
				Entities.removeUser(id);
			}
		};

		var regHandlers = function () {
			AppManager.on('user:connected', function (data) {
				API.addUser(data);
			});

			AppManager.on('user:disconnected', function (data) {
				// temperary commented out (conflict with chat module)
				// API.removeUser(data);
			});

		    AppManager.reqres.setHandler("contact:entities", function(){
		        return API.getUserEntities();
		    });

		    AppManager.reqres.setHandler("contact:entity", function (id) {
		    	return API.getContactEntity(id);
		    });

		    AppManager.reqres.setHandler("contact:entity:new", function(){
		      return new Entities.User();
		    });
		};
		
		AppManager.reqres.setHandler("initialize:contacts", function () {
			return API.initializeUsers();
		});

		AppManager.on('login:success', regHandlers);
	});

	return;
});