var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ConceptSchema = mongoose.Schema({
	// maybe code? to link image to content
	name: {type: String, required: true},
	description: {type: String, required: true},
	// timeline: {year: event/image object?},
	content: [{type: Schema.ObjectId, ref: 'Content'}], //alow changing of content order!!
	sources: String,
	refs: [{type: Schema.ObjectId, ref: 'Concept'}]
});




var ConceptModel = mongoose.model("Concept", ConceptSchema)