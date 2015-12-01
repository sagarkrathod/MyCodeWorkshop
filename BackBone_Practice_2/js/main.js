require.config({
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'handlebars':'lib/handlebars'
    }
});


require(['views/formView'],function(FormView){
  var formView = new FormView();
})
