import React from 'react';
import Reflux from 'reflux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Notify, resetNotify } from '../../utils/stepByStep';

import NewSkill from './partials/new-skill';
import GridSkill from './partials/grid-skills';
import Alert from './partials/alert';

import SkillActions from '../../actions/skills';
import SkillStore from '../../stores/skills';

const Skills = React.createClass({
	mixins: [
		Reflux.connect(SkillStore, 'skills'),
		Reflux.listenTo(SkillStore, 'onGetSkills'),
		Reflux.listenTo(SkillStore, 'onGetSkillsCompleted'),
		Reflux.listenTo(SkillStore, 'onGetSkillsFailed')
	],
	componentWillMount() {
		resetNotify();
		Notify('info', '[SKILLS CP] -> getSkills');
		SkillActions.getSkills();
	},
	onGetSkills(state) {
		if (state.action === 'onGetSkills') {
			Notify('info', '[SKILLS CP] -> onGetSkills');
		}
	},
	onGetSkillsCompleted(state) {
		if (state.action == 'onGetSkillsCompleted') {
			Notify('info', '[SKILLS CP] -> onGetSkillsCompleted');
		}
	},
	onGetSkillsFailed(state) {
		if (state.action == 'onGetSkillsFailed') {
			Notify('info', '[SKILLS CP] -> onGetSkillsFailed');
			Notify('error', JSON.stringify(state.error));
		}
	},
	render() {
		return (
			<div>
				<div className= "u-center">
					<h1>List of Skills</h1>
					<hr />
				</div>
				<div>
					<Alert />
					<Grid>
						{/* NEW SKILL */}
						<Row className="show-grid">
							<Col md={2} />
							<Col md={8}>
								<NewSkill />
							</Col>
							<Col md={2} />
						</Row>
						{/* GRID SKILLS */}
						<Row className="show-grid">
							<Col md={12}>
								<GridSkill skills={this.state.skills.skills} />
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
});

export default Skills;
