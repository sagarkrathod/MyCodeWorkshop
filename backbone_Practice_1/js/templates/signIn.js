define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"\">\n  <table cellpadding='5' border='1'>\n    <tr>\n      <td>User Name:</td>\n      <td><input type=\"text\" value=' sagar' disabled=\"disabled\"></td>\n    </tr>\n    <tr>\n      <td>PPassword:</td>\n      <td><input type=\"password\"></td>\n    </tr>\n    <tr>\n      <td class=\"Password\">\n"
    + ((stack1 = container.invokePartial(partials.forgotpasswordPartials,depth0,{"name":"forgotpasswordPartials","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </td>\n    </tr>\n  </table>\n</div>\n";
},"usePartial":true,"useData":true})

});