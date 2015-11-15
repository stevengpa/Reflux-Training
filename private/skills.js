express = require('express'),
	Router = express.Router(),
	path = require('path'),
	locallydb = require('locallydb'),
	db = new locallydb(path.join(__dirname, '/data')),
	tblSkills = db.collection('skills');

Router.route('/skills')
	.get(function(req, res, next) {
		res.send(tblSkills.items);
	})
	.post(function(req, res, next) {
		var skillId = tblSkills.insert({ name: req.name });
		res.send(skillId);
	});

module.exports = Router;
