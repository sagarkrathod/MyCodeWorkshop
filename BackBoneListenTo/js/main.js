require.config({
  paths:{
    jquery:'lib/jquery',
    backbone:'lib/backbone',
    underscore:'lib/underscore',
    handlebars:'lib/handlebars'
  }
});


define(['jquery','underscore','backbone','handlebars','view/pageView'],
        function($,_,Backbone,Handlebars,PageView){

            var pageView = new PageView();
});
