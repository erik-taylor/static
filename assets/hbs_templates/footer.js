define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<footer class=\"panel color_4 dark text_center\" style=\"background-color: "
    + alias4(((helper = (helper = helpers.footer_background_color || (depth0 != null ? depth0.footer_background_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer_background_color","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"panel_body\">\n		<div class=\"credits\">&copy;"
    + alias4(((helper = (helper = helpers.footer_text || (depth0 != null ? depth0.footer_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer_text","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"wedge-2x\"></div>\n	</div>\n</footer>";
},"useData":true}); });