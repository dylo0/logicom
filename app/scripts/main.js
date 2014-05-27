require([
	'backbone',
	'backbone.marionette',
	'app',
	'communicator',
	'config/main',
	'apps/login/login_app',
	'apps/header/header_app',
	'apps/chat/chat_app',
	'apps/contacts/contacts_app',
	'apps/conversations/conversations_app',
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
