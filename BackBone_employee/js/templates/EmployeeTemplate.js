define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  <tr>\n                    <td><input type='checkbox'></td>\n                    <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td><span class=\"glyphicon glyphicon-pencil\" style='cursor:pointer' aria-hidden=\"true\"></span></td>\n                  </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"panel panel-primary\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">Employee Details</div>\n\n  <!-- Table -->\n    <table class=\"table\">\n      <tr>\n        <th><input type='checkbox' id='selectAll'></th>\n        <th>Employee Name</th>\n        <th>Employee Phone</th>\n        <th>Employee Age</th>\n        <th>Employee Address</th>\n      </tr>\n      <tr>\n        <td colspan=5>\n            <div id=\"allEmployee\">\n              <table class=\"table\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.employee : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </table>\n            <div>\n        </td>\n      </tr>\n\n\n\n\n    </table>\n\n</div>\n<div class=\"\">\n  <button type=\"button\" class=\"btn btn-primary\" id='addEmpBtn'>Add Employee</button>\n  <button type=\"button\" class=\"btn btn-danger\" id=\"deleteEmpBtn\">Delete Employee</button>\n</div>\n";
},"useData":true})

});