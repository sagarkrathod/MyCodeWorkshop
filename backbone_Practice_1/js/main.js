
require.config({
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'handlebars':'lib/handlebars'
    }
});


require(['views/homeView'],function(SignInContainerView){
        var signInContainer = new SignInContainerView();
})
