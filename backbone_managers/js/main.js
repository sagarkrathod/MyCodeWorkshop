require.config({
  paths:{
    jquery:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min',
    marionette:'https://cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.4.4/backbone.marionette.min.',
    underscore:'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    backbone:'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
    handlebars:'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js'
  }
});

require(['jquery','view/managerView'],function($,ManagerView){
  

  var managerView = new ManagerView()
})
