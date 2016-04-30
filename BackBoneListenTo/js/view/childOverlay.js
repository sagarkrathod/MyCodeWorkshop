define(['jquery','underscore','backbone','handlebars'],
        function($,_,Backbone,Handlebars){

          var ChildOverlay = Backbone.View.extend({
              tagName:'div',
              initialize:function(){
                  this.render();
              },
              render:function(){
                  var content = this.$el.html("<div class='transperentScreen'></div><div class='Overlay'><p>This is Overlay</p><button id='closeOverlayBtn'>Close Overlay</button></div>");
                  $('body').append(content);
              },
              events:{
                  'click #closeOverlayBtn' : "closeOverlay"
              },
              closeOverlay:function(){
                this.remove();
              }
          });


          return ChildOverlay;

});
