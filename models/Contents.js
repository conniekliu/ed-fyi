var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var contentSchema = mongoose.Schema({
	rank: Number, // this is so easy to sort content, so all pages have same order
	title: {type: String, required: true},
	content: {type: String, required: true},
});

var contentModel = mongoose.model("Content", contentSchema);

var Contents = (function(contentModel) {
	var that = {};

	// create content

	// update content

	// each method should update concept as well

});