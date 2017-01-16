var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var conceptSchema = mongoose.Schema({
	// maybe code? to link image to content
	name: {type: String, required: true, index: true},
	description: {type: String, required: true},
	// timeline: {year: event/image object?},
	content: [{type: Schema.ObjectId, ref: 'Content'}], //allow changing of content order!!
	sources: String,
	refs: [{type: Schema.ObjectName, ref: 'Concept'}]
});

var conceptModel = mongoose.model("Concept", conceptSchema);

var Concepts = (function(conceptModel) {
	var that = {};

	/**
	 * Exposed function that returns allConcepts in system
	 * @param {Function} callback - called with array of JSON 
	 * 		objects containing concept name and refs, otherwise error
	 */
	that.getAllConcepts = function(callback) {
		conceptModel.find({}, (function(err, allConcepts) {
			if (err) callback(err);
			else {
				names = allConcepts.map(function(x) return {name: x.name, refs: x.refs} );
				callback(null, names);
			}
		}));
	};

	/**
	 * Exposed function that returns concept information
	 * @param {String} conceptName - name of concept to retrieve info
	 * @param {Function} callback - called with array of concept information,
	 * 		otherwise error
	 */
	that.getConcept = function(conceptName, callback) {
		conceptModel.findOne({name: conceptName})
			.populate({
				path: 'content'
			})
			.exec(function(err, conceptInfo) {
				if (err) callback(err);
				else callback(null, conceptInfo);
		});
	};

	/**
	 * Exposed function that adds another concept
	 * @param {String} conceptName - name of concept to retrieve info
	 * @param {Function} callback - called with array of concept information,
	 * 		otherwise error
	 */
	 // TODO: actually change this method to add a new concept, and think about how to add content
	that.addConcept = function(conceptName, callback) {
		conceptModel.findOne({name: conceptName})
			.populate({
				path: 'content'
			})
			.exec(function(err, conceptInfo) {
				if (err) callback(err);
				else callback(null, conceptInfo);
		});
	};

});