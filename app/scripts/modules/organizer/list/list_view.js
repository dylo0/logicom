'use strict';

define(["app",
        "select2",
        "datatables",
        "hbs!modules/organizer/list/templates/organizer",
        "hbs!modules/organizer/list/templates/message_tmpl"],
        function (AppManager, select2, datatables, ChatTpl, MessageTpl) {
    AppManager.module("Organizer.List.View", function(View, AppManager, Backbone, Marionette, $, _){
        var dataTablesCfg = AppManager.request('config:dataTables');;
        var tableHeightOffset = 430;
        var localTableCfg = $.extend({}, dataTablesCfg, {
            searching: false
        });

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
                selects: 'select'
            },


            childViewContainer: '#stock-items',


            events: {
                'keypress #message-input': 'onInputKeypress',
            },
            
            onShow: function () {
                var that = this;
                $(this.ui.selects).select2({allowClear: true});
                $('table').DataTable(localTableCfg);
                this.setTableHeight();
                
                $(window).resize(function() {
                    that.setTableHeight();
                });
            },

            destroy: function () {
                $(window).off('resize', this.setTableHeight);
            },
            
            setTableHeight: function () {
                $('.dataTables_scrollBody').css('height', ($(window).height() - tableHeightOffset) * 0.5);
            },

            onInputKeypress: function (evt) {
                var ENTER_KEY = 13;

                if ( evt.which === ENTER_KEY) {
                    this.sendMessage();
                }
            },
        });    
    });

    return AppManager.Organizer.List.View;
});
