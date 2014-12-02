define([
	'backbone',
	'text!../../../../../../templates/tabs/dummyChart.tpl'
], function(Backbone, template) {
	return Backbone.View.extend({
		
		template: _.template(template),

		render: function() {
			var html = this.template();
			this.$el.append(html);
			return this;
		},
		
		initialize: function() {
			
		}	
	});	
}) 