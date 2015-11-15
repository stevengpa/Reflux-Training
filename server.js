var express = require('express'),
		app = express(),
		ejs = require('ejs'),
		routerPeople = require('./private/people'),
		routerSkills = require('./private/skills');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.get('*', function(req, res, next){
	res.render('index.html');
});

app.use('', routerPeople);
app.use('', routerSkills);

app.listen(1000, function() {
	console.log('Server Running in port 1000');
});
