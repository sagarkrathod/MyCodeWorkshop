define(['jquery','underscore','backbone','handlebars','../templates/signIn','../templates/forgotpassword'],function($,_,Backbone,Handlebars,signInTemplate,Forgotpassword){
      var SignInContainerView = Backbone.View.extend({
          initialize:function(){
            //alert(Forgotpassword);
            //Handlebars.registerPartial('Forgotpassword', '{{ForgotpasswordPartial}}')
            Handlebars.registerPartial( "forgotpasswordPartials", Forgotpassword );
            //Handlebars.registerPartial('forgotpassword', '{{Forgotpassword}}')

            $('.signInContainer').html(signInTemplate)
            // $('.forgotPassword').html(Forgotpassword)
          },
          events:{
            'click .mydiv':'someFunction'
          },
          someFunction:function(){
            alert('calling some Finction!!!')
          }

      })

      return SignInContainerView;
})
