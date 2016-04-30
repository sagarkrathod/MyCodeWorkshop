define(['jquery','underscore','backbone','handlebars','../templates/overlayTemplate'],
        function($,_,Backbone,Handlebars,OverlayTemplate){
  'use strict';

  var OverlayView = Backbone.View.extend({
      template:OverlayTemplate,
      tagName:'div',
      id:'testID',
      events:{
          'click #overlayCloseButton' : this.closeOverlay,
      },
      initialize:function(){

        alert('overlay');
        // $( 'body' ).on( 'click', '.addMoreSongsClass', function () {
        //   alert('closing');
        // }.bind( this ) );
      },
      render:function(){
        this.$el.append(OverlayTemplate);
        return this;
      },
      closeOverlay:function(){
        alert('closing');
      }
  });
  return OverlayView;

});
