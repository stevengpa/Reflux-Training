import React from 'react';
import Router from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';


const RouteHandler = Router.RouteHandler,
			Link = Router.Link;

const Layout = React.createClass({
	render() {
		return (
			<div>
				<Navbar inverse toggleNavKey={0}>
					<NavBrand><a href="/">Reflux Training</a></NavBrand>
					<Nav right eventKey={0}> {/* This is the eventKey referenced */}
						<NavItem eventKey={1} href="/">Home</NavItem>
						<NavItem eventKey={2} href="/skills">Skills</NavItem>
						<NavItem eventKey={3} href="/people">People</NavItem>
					</Nav>
				</Navbar>
				<div>
	      	<RouteHandler />
				</div>
			</div>
		);
	}
});

export default Layout;
