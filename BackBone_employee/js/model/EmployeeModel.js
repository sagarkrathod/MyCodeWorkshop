define(['jquery','backbone'],function($,Backbone){
  var EmployeeModel = Backbone.Model.extend({
    initialize: function(){

    },
    getData:function(){
      var data =
      {'employee':[
          {'name':'Sagar Rathod','address':'Union City','age':'30','phone':'898-122-1234'},
          {'name':'Punit Singh','address':'Sunnyvale','age':'30','phone':'434-545-6754'},
          {'name':'John Smith','address':'Fremont','age':'34','phone':'123-434-5676'},
          {'name':'Amenda Jordan','address':'San Jose','age':'37','phone':'123-654-4576'},
          {'name':'Smith Piil','address':'Hawyard','age':'39','phone':'634-256-4678'},
          {'name':'luis D','address':'Milpitas','age':'50','phone':'128-789-6578'}
       ]}

       return data;
    }
  });

  return EmployeeModel;


})
