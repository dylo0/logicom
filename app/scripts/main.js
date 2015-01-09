require([
	'backbone',
	'backbone.marionette',
	'app',
	'communicator',
	'config/main',
	'config/datatablesCfg',
	'modules/login/login_app',
	'modules/header/header_app',
	'modules/loadMarket/load_market',
	'modules/organizer/organizer',
	'modules/contacts/contacts_app',
	'modules/conversations/conversations_app',
	'entities/credential',
	'entities/header',
	'entities/message',
	'entities/contact',
	'entities/conversation',
	'entities/loads'
],
function ( Backbone, Marionette, App ) {
    'use strict';

	App.start();
});
