define([
	'backbone'
], function(Backbone) {	
	var model = Backbone.Model.extend({
		defaults: {
			id: null			
		}
	})
	return model;

}) 
