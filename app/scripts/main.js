require([
	'backbone',
	'backbone.marionette',
	'app',
	'communicator',
	'config/main',
	'modules/login/login_app',
	'modules/header/header_app',
	'modules/chat/chat_app',
	'modules/loadMarket/load_market_app',
	'modules/contacts/contacts_app',
	'modules/conversations/conversations_app',
	'entities/credential',
	'entities/header',
	'entities/message',
	'entities/contact',
	'entities/conversation',
	// 'regionManager'
],
function ( Backbone, Marionette, App ) {
    'use strict';

	App.start();
});
