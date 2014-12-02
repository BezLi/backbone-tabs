define([
	'backbone',
	'../models/tabs'
], function(Backbone, model) {	
	var collection = Backbone.Collection.extend({
		model: model		
	})	

	return collection;
}) 