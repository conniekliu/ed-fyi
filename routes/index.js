var express = require('express');
var router = express.Router();
var Concepts = require('../models/Concepts');

var count = 0;

router.get('/', function(req, res, next) {
	Concepts.getAllConcepts(function(err, allConcepts) {
		if (err) {
			console.log("err is " + err);
		} else {
			console.log("allConcepts is " + JSON.stringify(allConcepts));
			res.render('home', {concepts: allConcepts});
		}
	})
});

router.get('/about', function(req, res, next) {
	res.render('about', {});
});

router.post('/concept', function(req, res, next) {
	var conceptId = req.body.id;
	console.log("concept is " + conceptId);
	Concepts.getConcept(conceptId, function(err, conceptInfo) {
		if (err) {
			console.log("err is " + err);
		} else {
			console.log("conceptInfo is " + JSON.stringify(conceptInfo));
			res.render('concept', {name: conceptInfo.name, description: conceptInfo.description});
		}
	})
});

router.get('/temp', function(req, res) {
	Concepts.addConcept("Standardized Exams", "exams are both good and bad", function(err, concept) {
		if (err) {
			console.log("err is " + err);
		} else {
			res.status(200).json({
				success: true,
				content: concept
			}).end();
		}
	})
})

module.exports = router;