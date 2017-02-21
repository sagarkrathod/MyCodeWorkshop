define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"overlayContainer\">\n  <div class=\"disabledBackground\">\n  </div>\n  <div class=\"overlay\">\n      <table cellpadding=\"10\">\n        <tr>\n          <td>Movie Name:</td>\n          <td><input type=\"text\"></td>\n        </tr>\n        <tr>\n          <td>Song Name:</td>\n          <td><input type=\"password\"></td>\n        </tr>\n        <tr>\n          <td></td>\n          <td><button type=\"button\" id='addSongOverlayBtn'>Add</button>&nbsp;\n            <button type=\"button\" id='CancelSongOverlayBtn' class=\"addMoreSongsClass\">Cancel</button>\n          </td>\n        </tr>\n      </table>\n  </div>\n</div>\n";
},"useData":true})

});