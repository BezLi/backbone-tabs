define([
	'backbone'
], function(Backbone) {
	var router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'tabs/:url': 'home' 
		}			
	});

	return router;
}) 