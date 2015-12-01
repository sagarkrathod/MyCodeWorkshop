define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"\">\n    <table>\n      <tr>\n        <td>First Name:</td>\n        <td><input type=\"text\" value='"
    + alias4(((helper = (helper = helpers.fName || (depth0 != null ? depth0.fName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fName","hash":{},"data":data}) : helper)))
    + "'></td>\n      </tr>\n      <tr>\n        <td>Last Name:</td>\n        <td><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.lname || (depth0 != null ? depth0.lname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lname","hash":{},"data":data}) : helper)))
    + "\"></td>\n      </tr>\n      <tr>\n        <td>Address 1:</td>\n        <td><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.address1 || (depth0 != null ? depth0.address1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address1","hash":{},"data":data}) : helper)))
    + "\"></td>\n      </tr>\n      <tr>\n        <td>Address 2:</td>\n        <td><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.address2 || (depth0 != null ? depth0.address2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address2","hash":{},"data":data}) : helper)))
    + "\"></td>\n      </tr>\n      <tr>\n        <td>Zip:</td>\n        <td><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.zip || (depth0 != null ? depth0.zip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data}) : helper)))
    + "\"></td>\n      </tr>\n    </table>\n</div>\n";
},"useData":true})

});