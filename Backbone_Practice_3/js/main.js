require.config({
  paths:{
    jquery:'lib/jquery',
    backbone:'lib/backbone',
    underscore:'lib/underscore',
    handlebars:'lib/handlebars'
  }
});


require(['jquery','views/songListView'],function($,SongListView){
    var songListView = new SongListView();
    console.log(songListView);
});
