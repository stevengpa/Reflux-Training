import React from 'react';
import Router from 'react-router';

import Layout from './components/layout';
import Skills from './components/skills';
import Index from './components/index';
import People from './components/people';
import NotFound from './components/not-found';

let Route = Router.Route;
let routes = (
	<Route handler={Layout}>
		<Route path="/" name="index" handler={Index} />
		<Route path="skills" name="skills" handler={Skills} />
		<Route path="people" name="people" handler={People} />
		<Route path="*" handler={NotFound}/>
	</Route>
);

Router.run(routes, Router.HistoryLocation, function (Root) { 
		React.render(<Root />, document.getElementById('app'))
});
