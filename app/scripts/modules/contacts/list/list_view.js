define(["app",
        "select2",
        "hbs!modules/contacts/list/templates/contactList_tmpl", 
        "hbs!modules/contacts/list/templates/user_tmpl"],
        function(AppManager, select2, ContactListTpl, UserTpl){
    AppManager.module("ContactsApp.List.View", function(View, AppManager, Backbone, Marionette, $, _){
        View.UserView = Backbone.Marionette.ItemView.extend({  
            template: UserTpl,
            className: 'panel panel-default single-contact',

            events: {
                'click #start-conversation-btn': 'startConversation'
            },

            startConversation: function () {
                this.trigger('conversation:start', this.model)
            }
        });

        View.ContactsView = Backbone.Marionette.CompositeView.extend({
            childView: View.UserView,
            className: 'jumbotron variable-height',
            
            ui: {
                selects: 'select'
            },

            onShow: function () {
                $(this.ui.selects).select2();
            },
            template: ContactListTpl,
            childViewContainer: "#contact-list-container"
            
        });
    });

    return AppManager.ContactsApp.List.View;
});
