var express = require('express');
var router = express.Router();

var count = 0;

router.get('/', function(req, res, next) {
	var concepts;
	// all concepts from model
	res.render('home', {concepts: concepts});
});

router.get('/about', function(req, res, next) {
	res.render('about', {});
});

router.post('/concept', function(req, res, next) {
	var concept = req.body.concept;
	// get concept info
	res.render('concept', {})
})

module.exports = router;