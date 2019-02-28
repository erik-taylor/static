define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<footer class=\"panel color_4 dark text_center\" style=\"background-color: "
    + container.escapeExpression(((helper = (helper = helpers.footer_background_color || (depth0 != null ? depth0.footer_background_color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"footer_background_color","hash":{},"data":data}) : helper)))
    + ";\">\n	<div class=\"panel_body\">\n		<div class=\"credits\">\n			&copy; \n			\n			<span id=\"copyright\">\n        <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>\n    	</span> \n\n    	All Rights Reserved\n		</div>\n		<div class=\"wedge-2x\"></div>\n	</div>\n</footer>";
},"useData":true}); });