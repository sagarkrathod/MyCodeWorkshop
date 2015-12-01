define(['jquery','underscore','backbone','handlebars','../templates/songListTemplate'],
        function($,_,Backbone,Handlebars,SongListTemplate){
  'use strict';
  var SongListModel = Backbone.Model.extend({
    initialize:function(){
      var data={"employees":[
          {"movieName":"TAMASHA", "songName":"Heer Toh Badi Sad Hai"},
          {"movieName":"PREM RATAN DHAN PAYO", "songName":"Aaj Unse Milna Hai"},
          {"movieName":"Singh is Bling", "songName":"Dil Kare Chu Che"}
      ]}
    }
  })

  return SongListModel;
});
