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

		// Companies list
		// company:"Magna Architectural Design"
		// company:"Pak and Save"
		// company:"A Plus Lawn Care"
		// company:"Fit Tonic"
		// company:"William Wanamaker & Sons"
		// company:"Boys Markets"
		// company:"Red Owl"
		// company:"Canal Villere"
		// company:"Frame Scene"
		// company:"Record World"
		// company:"Pleasures and Pasttimes"
		// company:"Total Yard Maintenance"
		// company:"Incredible Universe"
		// company:"Corinthian Designs"
		// company:"The Jolly Farmer"
		// company:"Galyan's"
		// company:"Access Asia"
		// company:"The Spotted Cougar"
		// company:"Sherman's"
		// company:"Fradkin Brothers Furniture"
		// company:"Sports Town USA"
		// company:"Isaly's"
		// company:"Your Choices"
		// company:"10,000 Auto Parts"
		// company:"Bumper to Bumper Auto Parts"

	    var initializeMessages = function () {
	    	var messages = new Entities.MessageCollection([
	    		{date:"2015-01-02", from:{postal: "44100", country: "D"}, to:{postal: "12136", country: "D"}, weight: 120, length: 1, added: "2015-01-02", company:"Magna Architectural Design"},
	    		{date:"2015-01-01", from:{postal: "57100", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 430, length: 2, added: "2015-01-02", company:"Pak and Save"},
	    		{date:"2015-01-05", from:{postal: "44100", country: "PL"}, to:{postal: "", country: "PL"}, weight: 2340, length: 1, added: "2015-01-02", company:"Corinthian Designs"},
	    		{date:"2015-01-10", from:{postal: "57100", country: "D"}, to:{postal: "32005", country: "D"}, weight: 430, length: 5, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-04", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 120, length: 4, added: "2015-01-03", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-06", from:{postal: "32005", country: "N"}, to:{postal: "32005", country: "N"}, weight: 5640, length: 12, added: "2015-01-03", company:"Fit Tonic"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "D"}, to:{postal: "32005", country: "D"}, weight: 120, length: 1, added: "2015-01-03", company:"The Jolly Farmer"},
	    		{date:"2015-01-02", from:{postal: "57100", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 540, length: 3, added: "2015-01-02", company:"William Wanamaker & Sons"},
	    		{date:"2015-01-09", from:{postal: "32005", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 560, length: 6, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-03-12", from:{postal: "32005", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 0, length: 1, added: "2015-01-03", company:"Incredible Universe"},
	    		{date:"2015-01-03", from:{postal: "12136", country: "PL"}, to:{postal: "15196", country: "PL"}, weight: 80, length: 3, added: "2015-01-02", company:"A Plus Lawn Care"},
	    		{date:"2015-04-13", from:{postal: "32005", country: "SK"}, to:{postal: "57100", country: "SK"}, weight: 340, length: 1, added: "2015-01-01", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-22", from:{postal: "12136", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 0, length: 4, added: "2015-01-02", company:"Red Owl"},
	    		{date:"2015-06-12", from:{postal: "72236", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 1, added: "2015-01-02", company:"Galyan's"},
	    		{date:"2015-01-22", from:{postal: "57100", country: "N"}, to:{postal: "72236", country: "N"}, weight: 120, length: 6, added: "2015-01-06", company:"Boys Markets"},
	    		{date:"2015-03-04", from:{postal: "32005", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 450, length: 1, added: "2015-01-02", company:"Total Yard Maintenance"},
	    		{date:"2015-01-07", from:{postal: "32005", country: "S"}, to:{postal: "32005", country: "S"}, weight: 600, length: 12, added: "2015-01-04", company:"Sports Town USA"},
	    		{date:"2015-01-12", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 10, length: 1, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-03", from:{postal: "12136", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 230, length: 5, added: "2015-01-05", company:"Fradkin Brothers Furniture"},
	    		{date:"2015-01-08", from:{postal: "32005", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 20, length: 1, added: "2015-01-02", company:"A Plus Lawn Care"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "GB"}, to:{postal: "12136", country: "GB"}, weight: 0, length: 4, added: "2015-01-03", company:"Record World"},
	    		{date:"2015-01-06", from:{postal: "32005", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 120, length: 4, added: "2015-01-02", company:"Bumper to Bumper Auto Parts"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 0, length: 3, added: "2015-01-04", company:"William Wanamaker & Sons"},
	    		{date:"2015-01-03", from:{postal: "57100", country: "D"}, to:{postal: "32005", country: "D"}, weight: 3450, length: 1, added: "2015-01-02", company:"Galyan's"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "12136", country: "PL"}, weight: 230, length: 1, added: "2015-01-05", company:"Incredible Universe"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 0, length: 1, added: "2015-01-02", company:"Fit Tonic"},
	    		{date:"2015-01-30", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 120, length: 1, added: "2015-01-02", company:"Sports Town USA"},
	    		{date:"2015-01-02", from:{postal: "12136", country: "CZ"}, to:{postal: "15196", country: "CZ"}, weight: 10, length: 3, added: "2015-01-02", company:"The Jolly Farmer"},
	    		{date:"2015-01-26", from:{postal: "32005", country: "GB"}, to:{postal: "15196", country: "GB"}, weight: 20, length: 1, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-02", from:{postal: "72236", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 230, length: 1, added: "2015-01-03", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-16", from:{postal: "72236", country: "PL"}, to:{postal: "72236", country: "PL"}, weight: 0, length: 2, added: "2015-01-02", company:"10,000 Auto Parts"},
	    		{date:"2015-02-02", from:{postal: "32005", country: "CZ"}, to:{postal: "72236", country: "CZ"}, weight: 2340, length: 1, added: "2015-01-02", company:"Boys Markets"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 40, length: 1, added: "2015-01-02", company:"The Spotted Cougar"},
	    		{date:"2015-02-02", from:{postal: "72236", country: "GB"}, to:{postal: "12136", country: "GB"}, weight: 40, length: 8, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-03-02", from:{postal: "32005", country: "CZ"}, to:{postal: "72236", country: "CZ"}, weight: 20, length: 2, added: "2015-01-02", company:"Pak and Save"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "PL"}, to:{postal: "12136", country: "PL"}, weight: 340, length: 1, added: "2015-01-02", company:"Fradkin Brothers Furniture"},
	    		{date:"2015-05-02", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 0, length: 6, added: "2015-01-05", company:"Record World"},
	    		{date:"2015-04-04", from:{postal: "32005", country: "GB"}, to:{postal: "57100", country: "GB"}, weight: 230, length: 1, added: "2015-01-02", company:"Corinthian Designs"},
	    		{date:"2015-02-02", from:{postal: "12136", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 0, length: 7, added: "2015-01-02", company:"Red Owl"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "12136", country: "PL"}, weight: 460, length: 1, added: "2015-01-02", company:"Red Owl"},
	    		{date:"2015-02-02", from:{postal: "32005", country: "GB"}, to:{postal: "72236", country: "GB"}, weight: 4560, length: 1, added: "2015-01-01", company:"Isaly's"},
	    		{date:"2015-03-02", from:{postal: "72236", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 320, length: 1, added: "2015-01-02", company:"William Wanamaker & Sons"},
	    		{date:"2015-06-02", from:{postal: "32005", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 340, length: 5, added: "2015-01-02", company:"The Spotted Cougar"},
	    		{date:"2015-03-02", from:{postal: "57100", country: "PL"}, to:{postal: "72236", country: "PL"}, weight: 540, length: 1, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-07-02", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 3, added: "2015-01-02", company:"Incredible Universe"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 760, length: 1, added: "2015-01-05", company:"Boys Markets"},
	    		{date:"2015-03-02", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 70, length: 1, added: "2015-01-02", company:"Sherman's"},
	    		{date:"2015-08-02", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 4, added: "2015-01-02", company:"A Plus Lawn Care"},
	    		{date:"2015-01-02", from:{postal: "72236", country: "SK"}, to:{postal: "12136", country: "SK"}, weight: 230, length: 1, added: "2015-01-02", company:"Fradkin Brothers Furniture"},
	    		{date:"2015-01-06", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 40, length: 1, added: "2015-01-02", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "D"}, to:{postal: "13600", country: "D"}, weight: 30, length: 1, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 20, length: 1, added: "2015-01-02", company:"The Jolly Farmer"},
	    		{date:"2015-03-03", from:{postal: "72236", country: "D"}, to:{postal: "72236", country: "D"}, weight: 0, length: 4, added: "2015-01-02", ccompany:"Fit Tonic"},
	    		{date:"2015-02-02", from:{postal: "15196", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 50, length: 1, added: "2015-01-02", company:"Isaly's"},
	    		{date:"2015-05-02", from:{postal: "12136", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 1, length: 1, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-05", from:{postal: "32005", country: "D"}, to:{postal: "12136", country: "D"}, weight: 0, length: 1, added: "2015-01-02", company:"Total Yard Maintenance"},
	    		{date:"2015-02-02", from:{postal: "32005", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 30, length: 1, added: "2015-01-07", company:"Pak and Save"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 40, length: 6, added: "2015-01-02", company:"Sherman's"},
	    		{date:"2015-04-13", from:{postal: "72236", country: "N"}, to:{postal: "72236", country: "N"}, weight: 60, length: 1, added: "2015-01-08", company:"The Spotted Cougar"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "15196", country: "PL"}, weight: 230, length: 3, added: "2015-01-02", company:"Access Asia"},
	    		{date:"2015-03-17", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 2340, length: 5, added: "2015-01-02", company:"Your Choices"},
	    		{date:"2015-02-12", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 1, added: "2015-01-02", company:"William Wanamaker & Sons"},
	    		{date:"2015-01-02", from:{postal: "44100", country: "D"}, to:{postal: "12136", country: "D"}, weight: 120, length: 1, added: "2015-01-02", company:"Magna Architectural Design"},
	    		{date:"2015-01-01", from:{postal: "57100", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 430, length: 2, added: "2015-01-02", company:"Pak and Save"},
	    		{date:"2015-01-05", from:{postal: "44100", country: "PL"}, to:{postal: "", country: "PL"}, weight: 2340, length: 1, added: "2015-01-02", company:"Corinthian Designs"},
	    		{date:"2015-01-10", from:{postal: "57100", country: "D"}, to:{postal: "32005", country: "D"}, weight: 430, length: 5, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-04", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 120, length: 4, added: "2015-01-03", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-06", from:{postal: "32005", country: "N"}, to:{postal: "32005", country: "N"}, weight: 5640, length: 12, added: "2015-01-03", company:"Fit Tonic"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "D"}, to:{postal: "32005", country: "D"}, weight: 120, length: 1, added: "2015-01-03", company:"The Jolly Farmer"},
	    		{date:"2015-01-02", from:{postal: "57100", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 540, length: 3, added: "2015-01-02", company:"William Wanamaker & Sons"},
	    		{date:"2015-01-09", from:{postal: "32005", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 560, length: 6, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-03-12", from:{postal: "32005", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 0, length: 1, added: "2015-01-03", company:"Incredible Universe"},
	    		{date:"2015-01-03", from:{postal: "12136", country: "PL"}, to:{postal: "15196", country: "PL"}, weight: 80, length: 3, added: "2015-01-02", company:"A Plus Lawn Care"},
	    		{date:"2015-04-13", from:{postal: "32005", country: "SK"}, to:{postal: "57100", country: "SK"}, weight: 340, length: 1, added: "2015-01-01", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-22", from:{postal: "12136", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 0, length: 4, added: "2015-01-02", company:"Red Owl"},
	    		{date:"2015-06-12", from:{postal: "72236", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 1, added: "2015-01-02", company:"Galyan's"},
	    		{date:"2015-01-22", from:{postal: "57100", country: "N"}, to:{postal: "72236", country: "N"}, weight: 120, length: 6, added: "2015-01-06", company:"Boys Markets"},
	    		{date:"2015-03-04", from:{postal: "32005", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 450, length: 1, added: "2015-01-02", company:"Total Yard Maintenance"},
	    		{date:"2015-01-07", from:{postal: "32005", country: "S"}, to:{postal: "32005", country: "S"}, weight: 600, length: 12, added: "2015-01-04", company:"Sports Town USA"},
	    		{date:"2015-01-12", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 10, length: 1, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-03", from:{postal: "12136", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 230, length: 5, added: "2015-01-05", company:"Fradkin Brothers Furniture"},
	    		{date:"2015-01-08", from:{postal: "32005", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 20, length: 1, added: "2015-01-02", company:"A Plus Lawn Care"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "GB"}, to:{postal: "12136", country: "GB"}, weight: 0, length: 4, added: "2015-01-03", company:"Record World"},
	    		{date:"2015-01-06", from:{postal: "32005", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 120, length: 4, added: "2015-01-02", company:"Bumper to Bumper Auto Parts"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 0, length: 3, added: "2015-01-04", company:"William Wanamaker & Sons"},
	    		{date:"2015-01-03", from:{postal: "57100", country: "D"}, to:{postal: "32005", country: "D"}, weight: 3450, length: 1, added: "2015-01-02", company:"Galyan's"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "12136", country: "PL"}, weight: 230, length: 1, added: "2015-01-05", company:"Incredible Universe"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 0, length: 1, added: "2015-01-02", company:"Fit Tonic"},
	    		{date:"2015-01-30", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 120, length: 1, added: "2015-01-02", company:"Sports Town USA"},
	    		{date:"2015-01-02", from:{postal: "12136", country: "CZ"}, to:{postal: "15196", country: "CZ"}, weight: 10, length: 3, added: "2015-01-02", company:"The Jolly Farmer"},
	    		{date:"2015-01-26", from:{postal: "32005", country: "GB"}, to:{postal: "15196", country: "GB"}, weight: 20, length: 1, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-02", from:{postal: "72236", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 230, length: 1, added: "2015-01-03", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-16", from:{postal: "72236", country: "PL"}, to:{postal: "72236", country: "PL"}, weight: 0, length: 2, added: "2015-01-02", company:"10,000 Auto Parts"},
	    		{date:"2015-02-02", from:{postal: "32005", country: "CZ"}, to:{postal: "72236", country: "CZ"}, weight: 2340, length: 1, added: "2015-01-02", company:"Boys Markets"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 40, length: 1, added: "2015-01-02", company:"The Spotted Cougar"},
	    		{date:"2015-02-02", from:{postal: "72236", country: "GB"}, to:{postal: "12136", country: "GB"}, weight: 40, length: 8, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-03-02", from:{postal: "32005", country: "CZ"}, to:{postal: "72236", country: "CZ"}, weight: 20, length: 2, added: "2015-01-02", company:"Pak and Save"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "PL"}, to:{postal: "12136", country: "PL"}, weight: 340, length: 1, added: "2015-01-02", company:"Fradkin Brothers Furniture"},
	    		{date:"2015-05-02", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 0, length: 6, added: "2015-01-05", company:"Record World"},
	    		{date:"2015-04-04", from:{postal: "32005", country: "GB"}, to:{postal: "57100", country: "GB"}, weight: 230, length: 1, added: "2015-01-02", company:"Corinthian Designs"},
	    		{date:"2015-02-02", from:{postal: "12136", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 0, length: 7, added: "2015-01-02", company:"Red Owl"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "12136", country: "PL"}, weight: 460, length: 1, added: "2015-01-02", company:"Red Owl"},
	    		{date:"2015-02-02", from:{postal: "32005", country: "GB"}, to:{postal: "72236", country: "GB"}, weight: 4560, length: 1, added: "2015-01-01", company:"Isaly's"},
	    		{date:"2015-03-02", from:{postal: "72236", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 320, length: 1, added: "2015-01-02", company:"William Wanamaker & Sons"},
	    		{date:"2015-06-02", from:{postal: "32005", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 340, length: 5, added: "2015-01-02", company:"The Spotted Cougar"},
	    		{date:"2015-03-02", from:{postal: "57100", country: "PL"}, to:{postal: "72236", country: "PL"}, weight: 540, length: 1, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-07-02", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 3, added: "2015-01-02", company:"Incredible Universe"},
	    		{date:"2015-01-02", from:{postal: "15196", country: "CZ"}, to:{postal: "32005", country: "CZ"}, weight: 760, length: 1, added: "2015-01-05", company:"Boys Markets"},
	    		{date:"2015-03-02", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 70, length: 1, added: "2015-01-02", company:"Sherman's"},
	    		{date:"2015-08-02", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 0, length: 4, added: "2015-01-02", company:"A Plus Lawn Care"},
	    		{date:"2015-01-02", from:{postal: "72236", country: "SK"}, to:{postal: "12136", country: "SK"}, weight: 230, length: 1, added: "2015-01-02", company:"Fradkin Brothers Furniture"},
	    		{date:"2015-01-06", from:{postal: "32005", country: "GB"}, to:{postal: "32005", country: "GB"}, weight: 40, length: 1, added: "2015-01-02", company:"Pleasures and Pasttimes"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "D"}, to:{postal: "13600", country: "D"}, weight: 30, length: 1, added: "2015-01-02", company:"Frame Scene"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 20, length: 1, added: "2015-01-02", company:"The Jolly Farmer"},
	    		{date:"2015-03-03", from:{postal: "72236", country: "D"}, to:{postal: "72236", country: "D"}, weight: 0, length: 4, added: "2015-01-02", ccompany:"Fit Tonic"},
	    		{date:"2015-02-02", from:{postal: "15196", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 50, length: 1, added: "2015-01-02", company:"Isaly's"},
	    		{date:"2015-05-02", from:{postal: "12136", country: "PL"}, to:{postal: "32005", country: "PL"}, weight: 1, length: 1, added: "2015-01-02", company:"Canal Villere"},
	    		{date:"2015-01-05", from:{postal: "32005", country: "D"}, to:{postal: "12136", country: "D"}, weight: 0, length: 1, added: "2015-01-02", company:"Total Yard Maintenance"},
	    		{date:"2015-02-02", from:{postal: "32005", country: "SK"}, to:{postal: "32005", country: "SK"}, weight: 30, length: 1, added: "2015-01-07", company:"Pak and Save"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "57100", country: "PL"}, weight: 40, length: 6, added: "2015-01-02", company:"Sherman's"},
	    		{date:"2015-04-13", from:{postal: "72236", country: "N"}, to:{postal: "72236", country: "N"}, weight: 60, length: 1, added: "2015-01-08", company:"The Spotted Cougar"},
	    		{date:"2015-01-02", from:{postal: "32005", country: "PL"}, to:{postal: "15196", country: "PL"}, weight: 230, length: 3, added: "2015-01-02", company:"Access Asia"},
	    		{date:"2015-03-17", from:{postal: "32005", country: "D"}, to:{postal: "32005", country: "D"}, weight: 2340, length: 5, added: "2015-01-02", company:"Your Choices"}
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