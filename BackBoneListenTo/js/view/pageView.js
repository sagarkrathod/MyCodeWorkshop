define(['jquery','underscore','backbone','handlebars','../view/childOverlay'],
        function($,_,Backbone,Handlebars,ChildOverlay){

          var PageView = Backbone.View.extend({
              tagName:'div',
              initialize:function(){
                  this.render();
              },
              render:function(){
                  console.log(this.$el.html('sagar'));
                  var content = this.$el.html("<div id='ParentContainer'> <h1>This is Parent Container</h1> <button id='parentBtn'>Open Overlay</button> </div>");
                  $('body').append(content);
              },
              events:{
                  'click #parentBtn' : "buttonPress"
              },
              buttonPress:function(){
                //alert('Button Pressed');

                childOverlay = new ChildOverlay();
              }
          });


          return PageView;

});
