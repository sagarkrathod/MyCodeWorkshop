define(['jquery','underscore','backbone'],function($,Underscore,Backbone){


  var SongsView = Backbone.View.extend({
      el : $('#songListContainer'),
      initialize:function(){
          this.addMoreSongs();
      },
      render:function(){
          $('body').append('backboen');
      },
      events:{
          'click #subContainer' : 'addMoreSongs'
      },
      addMoreSongs:function(){
          alert('da');
      }
  });


  var songsView = new SongsView();
  songsView.render();




});
