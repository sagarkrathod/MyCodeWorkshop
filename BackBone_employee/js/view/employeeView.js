define(['jquery','backbone','../model/EmployeeModel','templates/EmployeeTemplate'],function($,Backbone,EmployeeModel,EmployeeTemplate){

  var Employee = Backbone.View.extend({
      template:EmployeeTemplate,
      el : $('#EmployeeContainer'),
      model:EmployeeModel,
      events:{
        'click #addEmpBtn' : 'addEmployee',
        'click #deleteEmpBtn' : 'deleteEmployee',
        'change #selectAll' : 'selectAllEmployee'
      },
      initialize:function(){
        this.render()
      },
      render:function(){
          var employeeModel = new EmployeeModel()
          //console.log(employeeModel.getData())
          console.log(this.$el)
          this.$el.html(this.template(employeeModel.getData()))
      },
      addEmployee:function(){
          alert('add')
      },
      deleteEmployee:function(){
        alert('delete')
      },
      selectAllEmployee:function(){
        $("input:checkbox").prop('checked', $(this).prop("checked"));
        
        console.log(this.$el)
      }

  });

  return Employee;

});
