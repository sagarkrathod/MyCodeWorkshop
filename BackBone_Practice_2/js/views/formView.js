define(['jquery','underscore','backbone','handlebars','templates/formTemplate'],function($,_,Backbone,Handlebars,FormTemplate){

  var FormView = Backbone.View.extend({
    template:FormTemplate,
    initialize:function(){
      var data={
        fName:'sagar',
        lname:'rathod',
        address1:'34655 skylark Drive',
        address2:'Apt 731',
        zip:'94587'
      }
      $('body').html(this.template(data))
    },
    render:function(){

    }
  });

  return FormView;


})
