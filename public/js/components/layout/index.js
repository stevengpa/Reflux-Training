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
					<NavBrand><Link to="/">Reflux Training</Link></NavBrand>
					<Nav right eventKey={0}> {/* This is the eventKey referenced */}
						<NavItem eventKey={1} active={false} className="nav-item"><Link to="/">Home</Link></NavItem>
						<NavItem eventKey={3} className="nav-item"><Link to="/people">People</Link></NavItem>
						<NavItem eventKey={2} className="nav-item"><Link to="/skills">Skills</Link></NavItem>
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
