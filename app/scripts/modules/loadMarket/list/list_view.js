define(["app",
        "select2",
        "datatables",
        "hbs!modules/loadMarket/list/templates/loads_tmpl", 
        "hbs!modules/loadMarket/list/templates/message_tmpl"],
        function(AppManager, select2, datatables, ChatTpl, MessageTpl){
    AppManager.module("LoadMarket.List.View", function(View, AppManager, Backbone, Marionette, $, _){
        var dataTablesCfg = AppManager.request('config:dataTables');;
        var tableHeightOffset = 330;

        View.MessageView = Backbone.Marionette.ItemView.extend({
            template: MessageTpl,
            tagName: 'tr'
        });

        View.ChatView = Backbone.Marionette.CompositeView.extend({
            childView: View.MessageView,
            template: ChatTpl,
            className: 'jumbotron chat-region',

            ui: {
                input: '#message-input',
                messages: '#loads-container',
                selects: 'select'
            },


            childViewContainer: '#stock-items',


            events: {
                'keypress #message-input': 'onInputKeypress',
            },

            onShow: function () {
                var that = this;
                $(window).resize(function() {
                    that.setTableHeight();
                });
                this.scrollMessages();
                $(this.ui.selects).select2({allowClear: true});
                $('table').DataTable(dataTablesCfg);
                this.setTableHeight();
            },

            destroy: function () {
                console.log('unbound');
                $(window).off('resize', this.setTableHeight);
            },

            onAddChild: function () {
                this.scrollMessages();
            },

            onInputKeypress: function (evt) {
                var ENTER_KEY = 13;

                if ( evt.which === ENTER_KEY) {
                    this.sendMessage();
                }
            },

            setTableHeight: function () {
                console.log('setting height from loads list');
                $('.dataTables_scrollBody').css('height', $(window).height() - tableHeightOffset);
            },

            scrollMessages: function () {
                 this.ui.messages.scrollTop(this.ui.messages[0].scrollHeight);
            },
            
            sendMessage: function () {
                var messageText = this.ui.input.val().trim();
                if (messageText) {
                    this.trigger('send:chat:message', messageText);
                    this.ui.input.val('');
                  
                    //scrolls messages container to bottom
                    this.scrollMessages();
                }
            }
        });    
    });

    return AppManager.LoadMarket.List.View;
});
