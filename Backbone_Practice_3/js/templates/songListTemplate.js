define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <tr>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.movieName : depth0), depth0))
    + "</br></td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.songName : depth0), depth0))
    + "</br></td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n  Song List!!!<br><br>\n  <table cellspacing='1' cellpadding='10'  class=\"songsTable\">\n    <tr>\n      <td class=\"heading\">Movie Name</td>\n      <td class=\"heading\">Song Name</td>\n    </tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.songs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </table>\n  <br>\n  <button type=\"button\" id='addMoreSongsBtn'>Add More Songs</button>\n";
},"useData":true})

});