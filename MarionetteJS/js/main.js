alert('woktinwotking');


require.config({
  paths:{
    jquery:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min',
    require:'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.22/require.min',
    underscore:'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    backbone:'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min'
  }
});


require(['jquery','views/songsView'],function($,SongsView){
    $('body').append('das');
});

//
//
// require.config({
//   paths:{
//     jquery:'lib/jquery',
//     backbone:'lib/backbone',
//     underscore:'lib/underscore',
//     handlebars:'lib/handlebars'
//   }
// })
//
//
// require(['jquery','views/songListView'],function($,SongListView){
//     var songListView = new SongListView();
//     console.log(songListView)
// })
