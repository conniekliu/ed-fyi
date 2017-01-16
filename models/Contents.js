var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ContentSchema = mongoose.Schema({
	rank: Number, // this is so easy to sort content, so all pages have same order
	title: {type: String, required: true},
	content: {type: String, required: true},
});

var ContentModel = mongoose.model("Content", ContentSchema)