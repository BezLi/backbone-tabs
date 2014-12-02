define([
	'backbone',		
	'./collections/tabs',
	'./views/index',
	'./router',
	'json!../../tabs.json'

], function(Backbone, collectionTabs, viewIndex, appRouter, tabsJson) {
	var start = function() {

		var tabsCollection = new collectionTabs();
		tabsCollection.add(tabsJson);

		var router = new appRouter();
		router.on('route:home', function(url) {
			var dummyView = new viewIndex({
				collection: tabsCollection,
				url: url
			});
			$('body').html(dummyView.render().$el);
		});

		

		

		Backbone.history.start();
	}

	return {initialize: start};
});