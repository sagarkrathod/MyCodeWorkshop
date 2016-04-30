define(['jquery','underscore','backbone','handlebars','../templates/songListTemplate','../models/songListModel','../views/overlayView'],
        function($,_,Backbone,Handlebars,SongListTemplate,SongListModel,OverlayView){
  'use strict';

  var SongListView = Backbone.View.extend({
      el : $('#songListContainer'),
      template:SongListTemplate,
      initialize:function(){
        var songListModel = new SongListModel();
        //console.log(songListModel.initialize)
        this.render();
      },
      render:function(){
        var data={"employees":[
            {"movieName":"TAMASHA", "songName":"Heer Toh Badi Sad Hai"},
            {"movieName":"PREM RATAN DHAN PAYO", "songName":"Aaj Unse Milna Hai"},
            {"movieName":"Singh is Bling", "songName":"Dil Kare Chu Che"}
        ]};
        this.$el.html(this.template(data));
      },
      events:{
          'click #addMoreSongsBtn' : 'addMoreSongs'
      },
      addMoreSongs:function(){
          var overlayView =  new OverlayView();
          $('body').append(overlayView.render().$el);
      }
  });

  return SongListView;

});
