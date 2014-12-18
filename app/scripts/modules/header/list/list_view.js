define(["app",
        "hbs!modules/header/list/templates/list_tmpl",
        "hbs!modules/header/list/templates/list_item_tmpl",
        "hbs!modules/header/list/templates/list_nesteditem_tmpl"],
        function(AppManager, listTpl, listItemTpl, listNestedItemTpl){
AppManager.module("HeaderApp.List.View", function(View, ContactManager, Backbone, Marionette, $, _){
    View.NestedHeader = Marionette.ItemView.extend({
        template: listNestedItemTpl,
        tagname: "li"
    });

    View.Header = Marionette.CompositeView.extend({
        template: listItemTpl,
        tagName: "li",
        // childView: View.NestedHeader,

        events: {
            "click a": "navigate"
        },

        initialize: function () {
            var nestedCollection = this.model.get('nestedLinks');
            if(nestedCollection) {
                this.collection = nestedCollection;
                this.childViewContainer = ".dropdown-menu";
            }
        },

        navigate: function(e){
            e.preventDefault();
            this.trigger("navigate", this.model);
        },

        onRender: function(){
            if(this.model.selected){
              // add class so Bootstrap will highlight the active entry in the navbar
              this.$el.addClass("active");
            };
        }
    });

    View.Headers = Marionette.CompositeView.extend({
        template: listTpl,
        childView: View.Header,
        childViewContainer: "ul",
    });
});

  return AppManager.HeaderApp.List.View;
});
