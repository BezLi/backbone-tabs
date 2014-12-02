define([
	'backbone',
	'text!../../../templates/index.tpl',
	'../views/tabs/dummyChart',
	'../views/tabs/dummyList',
	'../views/tabs/dummyTable'

], function(Backbone, template, dummyChartView, dummyListView, dummyTableView) {
	return Backbone.View.extend({
		template: _.template(template),
		views: {
			dummyChart: dummyChartView,
			dummyList: dummyListView,
			dummyTable: dummyTableView,
		},

		render: function() {
			var html = this.template({
				model: this.model,
				url: this.url
			});			
			this.$el.append(html);
			this.renderTab();
			return this;
		},

		renderTab: function() {
			if (this.url) {
				var view = new this.views[this.url]();
			} else {
				var url = this.$el.find('.nav-tabs li:first-child a').attr('href').split('tabs/')[1];
				var view = new this.views[url]();
			}			
			console.log(this.$el.find(".js-container"));
			this.$el.find(".js-container").html(view.render().$el);
		},

		initialize: function(options) {
			this.url = options.url;
			this.model = this.collection.toJSON();
		}	
	});	
}) 