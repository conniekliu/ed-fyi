var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ContentSchema = mongoose.Schema({
	title: {type: String, required: true},
	content: {type: String, required: true},
});

var ContentModel = mongoose.model("Content", ContentSchema)