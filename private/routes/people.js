var express = require('express'),
		Router = express.Router(),
		path = require('path'),
		_ = require('lodash'),
		locallydb = require('locallydb'),
		db = new locallydb(path.join(__dirname, '../data')),
		tblPeople = db.collection('people');

Router.route('/people')
	.get(function(req, res, next) {
		res.json(tblPeople.items);
	})
	.post(function(req, res, next) {
		var name = req.body.name;
		if (_.size(name) > 0) {
			tblPeople.insert({ name: name });
			res.json(tblPeople.items);
		} else {
			res.status(406).send('Missing Person Name');
		}
	})
	.delete(function(req, res, next) {
		var id = parseInt(req.query.id);
		if (!_.isNaN(id)) {
			tblPeople.remove(id);
			res.json(tblPeople.items);
		} else {
			res.status(406).send('Missing Person ID');
		}
	});

module.exports = Router;
