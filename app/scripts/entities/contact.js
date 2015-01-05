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
	    		{id:1, username: "Miłosz Kozłowski", name: "Miłosz", surname: "Kozłowski", company:"Magna Architectural Design", adress: "ul. Grodzickiego Tadeusza 33", postal: "20-256", city: "Lublin", phone:"792 115 184", email:"Miłosz@Kozłowski.com", online: 0},
	    		{id:2, username: "Ludwik Dudek", name: "Ludwik", surname: "Dudek", company:"Pak and Save", adress: "ul. Dobrzańskiego Bohdana 57", postal: "20-587", city: "Lublin", phone:"792 115 184", email:"Ludwik@Dudek.com", online: 0},
	    		{id:3, username: "Eugeniusz Pawlake", name: "Eugeniusz", surname: "Pawlake", company:"A Plus Lawn Care", adress: "ul. Kowalówki Henryka 24", postal: "61-695", city: "Poznań", phone:"792 115 184", email:"Eugeniusz@Pawlak.com", online: 1},
	    		{id:4, username: "Karina Sokołowska", name: "Karina", surname: "Sokołowska", company:"Fit Tonic", adress: "Kujawska 16", postal: "20-156", city: "Kazimierz", phone:"792 115 184", email:"Karina@Sokołowska.com", online: 0},
	    		{id:5, username: "Grzegorz Zawadzki", name: "Grzegorz", surname: "Zawadzki", company:"William Wanamaker & Sons", adress: "Kujawska 17", postal: "29-126", city: "Kazimierz", phone:"792 115 184", email:"Grzegorz@Zawadzki.com", online: 0},
	    		{id:6, username: "Eligiusz Szczepański", name: "Eligiusz", surname: "Szczepański", company:"Boys Markets", adress: "ul. Skargi Piotra 103", postal: "71-422", city: "Szczecin", phone:"792 115 184", email:"Eligiusz@Szczepański.com", online: 1},
	    		{id:7, username: "Amadej Kozłowski", name: "Amadej", surname: "Kozłowski", company:"Red Owl", adress: "ul. Gościeradzka 35", postal: "85-556", city: "Bydgoszcz", phone:"792 115 184", email:"Amadejkonstanty@Kozłowski.boysmarkets.com", online: 0},
	    		{id:8, username: "Jozafat Jaworski", name: "Jozafat", surname: "Jaworski", company:"Canal Villere", adress: "ul. Kozielska 32", postal: "93-360", city: "Łódź", phone:"792 115 184", email:"Jozafat@Jaworski.com", online: 0},
	    		{id:9, username: "Tadeusz Pawłowski", name: "Tadeusz", surname: "Pawłowski", company:"Frame Scene", adress: "ul. Metalowa 24", postal: "60-118", city: "Poznań", phone:"792 115 184", email:"Tadeusz@Pawłowski.com", online: 0},
	    		{id:10, username: "Mariusz Sokołowski", name: "Mariusz", surname: " Sokołowski", company:"Record World", adress: "ul. Wiosny Ludów 122", postal: "81-459", city: "Gdynia", phone:"792 115 184", email:"Mariusz@Sokołowski.com", online: 1},
	    		{id:11, username: "Kuba Wysocki", name: "Kuba Wysocki", surname: " Wysocki", company:"Pleasures and Pasttimes", adress: "ul. Nowogrodzka 21", postal: "00-658", city: "Warszawa", phone:"792 115 184", email:"Kuba@Wysocki.com", online: 0},
	    		{id:12, username: "Kondrat Borkowski", name: "Kondrat", surname: " Borkowski", company:"Total Yard Maintenance", adress: "ul. Limbowa 61", postal: "75-669", city: "Koszalin", phone:"792 115 184", email:"Kondrat@Borkowski.com", online: 0},
	    		{id:13, username: "Jaropełk Nowak", name: "Jaropełk", surname: "Nowak", company:"Incredible Universe", adress: "ul. Pińska 5", postal: "03-523", city: "Warszawa", phone:"792 115 184", email:"Jaropełk@Nowak.com", online: 0},
	    		{id:14, username: "Józefa Maciejewska", name: "Józefa", surname: "Maciejewska", company:"Corinthian Designs", adress: "ul. Pocztowa 121", postal: "58-500", city: "Jelenia Góra", phone:"792 115 184", email:"Józefa@Maciejewska.com", online: 0},
	    		{id:15, username: "Mieczysław Dąbrowski", name: "Mieczysław", surname: "Dąbrowski", company:"The Jolly Farmer", adress: "ul. Wesoła 119", postal: "60-598", city: "Poznań", phone:"792 115 184", email:"Mieczysław@Dąbrowski.com", online: 0},
	    		{id:16, username: "Fryderyk Nowakowski", name: "Fryderyk", surname: " Nowakowski", company:"Galyan's", adress: "ul. Janikowska 79", postal: "61-070", city: "Poznań", phone:"792 115 184", email:"Fryderyk@Nowakowski.com", online: 1},
	    		{id:17, username: "Mieczysław Kalinowski", name: "Mieczysław", surname: " Kalinowski", company:"Access Asia", adress: "ul. Brodnicka 83", postal: "04-960", city: "Warszawa", phone:"792 115 184", email:"Mieczysław@Kalinowski.com", online: 0},
	    		{id:18, username: "Frydryk Kalinowski", name: "Frydryk", surname: " Kalinowski", company:"The Spotted Cougar", adress: "ul. Kadłubka Wincentego 113", postal: "93-244", city: "Łódź", phone:"792 115 184", email:"Frydryk@Kalinowski.com", online: 0},
	    		{id:19, username: "Korneli Kucharski", name: "Korneli", surname: " Kucharski", company:"Sherman's", adress: "ul. Truskawkowa 51", postal: "65-129", city: "Zielona Góra", phone:"792 115 184", email:"Korneli@Kucharski.com", online: 0},
	    		{id:20, username: "Rościsława Walczak", name: "Rościsława", surname: "Walczak", company:"Fradkin Brothers Furniture", adress: "ul. Wolumen 135", postal: "01-912", city: "Warszawa", phone:"792 115 184", email:"Rościsława@Walczak.com", online: 0},
	    		{id:21, username: "Waleria Duda", name: "Waleria", surname: "Duda", company:"Sports Town USA", adress: "ul. Kownackiej Marii 74", postal: "92-608", city: "Łódź", phone:"792 115 184", email:"Waleria@Duda.com", online: 0},
	    		{id:22, username: "Janusz Tomaszewski", name: "Janusz", surname: "Tomaszewski", company:"Isaly's", adress: "ul. Mydlarska 33", postal: "80-833", city: "Gdańsk", phone:"792 115 184", email:"Janusz@Tomaszewski.com", online: 1},
	    		{id:23, username: "Aleksander Dąbrowski", name: "Aleksander", surname: "Dąbrowski", company:"Your Choices", adress: "ul. Oliwska 35", postal: "60-454", city: "Poznań", phone:"792 115 184", email:"Aleksander@Dąbrowski.com", online: 0},
	    		{id:24, username: "Marek Wieczorek", name: "Marek", surname: "Wieczorek", company:"10,000 Auto Parts", adress: "ul. Biegunowa 63", postal: "94-215", city: "Łódź", phone:"792 115 184", email:"Marek@Wieczorek.com", online: 0},
	    		{id:25, username: "Rafał Michalski", name: "Rafał", surname: "Michalski", company:"Bumper to Bumper Auto Parts", adress: "ul. Kokosowa 22", postal: "85-363", city: "Bydgoszcz", phone:"792 115 184", email:"Rafał@Michalski.com", online: 0},
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