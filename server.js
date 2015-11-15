var express = require('express'),
		app = express(),
		ejs = require('ejs'),
		bodyParser = require('body-parser'),
		routerPeople = require('./private/routes/people'),
		routerSkills = require('./private/routes/skills'),
		methodOverride = require('method-override'),
		morgan = require('morgan');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(morgan('dev'));

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.use('/api', routerPeople);
app.use('/api', routerSkills);

app.get('*', function(req, res, next){
	res.render('index.html');
});

app.listen(1000, function() {
	console.log('Server Running in port 1000');
});
