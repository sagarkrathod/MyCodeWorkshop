define(['jquery','underscore','backbone','handlebars','../templates/overlayTemplate'],
        function($,_,Backbone,Handlebars,OverlayTemplate){
  'use strict';

  var OverlayView = Backbone.View.extend({
      template:OverlayTemplate,
      events:{
          'click #CancelSongOverlayBtn' : 'closeOverlay'
      },
      initialize:function(){
        this.render();

        // $( 'body' ).on( 'click', '.addMoreSongsClass', function () {
        //   alert('closing');
        // }.bind( this ) );
      },
      render:function(){
        $('body').append(OverlayTemplate)
      },
      closeOverlay:function(){
        debugger;
          alert('closing');
      }
  })
  return OverlayView;

})
