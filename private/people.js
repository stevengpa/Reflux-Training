express = require('express'),
	Router = express.Router(),
	path = require('path'),
	locallydb = require('locallydb'),
	db = new locallydb(path.join(__dirname, '/data')),
	tblPeople = db.collection('people');

Router.route('/people')
	.get(function(req, res, next) {
		res.send(tblPeople.items);
	})
	.post(function(req, res, next) {
		var personId = tblPeople.insert({ name: req.name });
		res.send(personId);
	});

module.exports = Router;
