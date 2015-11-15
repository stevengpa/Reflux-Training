var express = require('express'),
		Router = express.Router(),
		path = require('path'),
		_ = require('lodash'),
		locallydb = require('locallydb'),
		db = new locallydb(path.join(__dirname, '../data')),
		tblSkills = db.collection('skills');

Router.route('/skills')
	.get(function(req, res, next) {
		res.json(tblSkills.items);
	})
	.post(function(req, res, next) {
		var skill = req.body.name;
		if (_.size(skill) > 0) {
			tblSkills.insert({ name: skill });
			res.json(tblSkills.items);
		} else {
			res.status(406).send('Missing Skill Name');
		}
	})
	.delete(function(req, res, next) {
		var id = parseInt(req.query.id);
		if (!_.isNaN(id)) {
			tblSkills.remove(id);
			res.json(tblSkills.items);
		} else {
			res.status(406).send('Missing Skill ID');
		}
	});

module.exports = Router;
