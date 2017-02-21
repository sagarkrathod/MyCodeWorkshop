define(['jquery','underscore','backbone','handlebars','../templates/overlayTemplate'],
        function($,_,Backbone,Handlebars,OverlayTemplate){
  'use strict';

  var OverlayView = Backbone.View.extend({
      className:'songOverlayContainer',
      events:{
          'click #CancelSongOverlayBtn' : 'closeOverlay'
      },
      initialize:function(){
           $('body').append(this.$el);
      },
      render:function(){
        this.$el.html(OverlayTemplate);
      },
      closeOverlay:function(){
        $(this.$el).remove();
      }
  });
  return OverlayView;
})

