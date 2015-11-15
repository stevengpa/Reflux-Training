import React from 'react';
import Reflux from 'reflux';
import { Row, Col, Input, Button } from 'react-bootstrap';
import { Notify } from '../../../utils/stepByStep';

import SkillActions from '../../../actions/skills';
import SkillStore from '../../../stores/skills';

const NewSkill = React.createClass({
	mixins: [
		//Reflux.listenTo(SkillStore, 'onAlert'),
		Reflux.listenTo(SkillStore, 'onAddSkillCompleted'),
		Reflux.listenTo(SkillStore, 'onAddSkillFailed')
	],
	getInitialState() {
		return {
			name: null
		}
	},
	/*
	onAlert(state) {
		if (state.action === 'onAlert') {
			Notify('info', '[NEW SKILL CP] -> onAlert');
			new PNotify({
        title: state.title,
        text: state.message,
        type: state.type
			});
			Notify('info', '[NEW SKILL CP] -> cleanAlert');
			SkillActions.cleanAlert();
		}
	},
	*/
	onAddSkillCompleted(state) {
		if (state.action === 'onAddSkillCompleted') {
			Notify('info', '[NEW SKILL CP] -> onAddSkillCompleted');
			Notify('info', '[NEW SKILL CP] -> alert');
			SkillActions.alert('success', 'Skill', 'The skill was successfully saved.');
			this.setState({name: null});
		}
	},
	onAddSkillFailed(state) {
		if (state.action === 'onAddSkillFailed') {
			Notify('info', '[NEW SKILL CP] -> onAddSkillFailed');
			SkillActions.alert('error', 'Skill', 'Ups! Something wrong happened during the skill save process.');
		}
	},
	saveSkill() {
		Notify('info', '[NEW SKILL CP] -> addSkill');
		SkillActions.addSkill(this.state.name);
	},
	handleChange(event) {
    this.setState({name: event.target.value});
  },
	render() {
		return (
			<form className="form-horizontal">
				<Row>
					<Col md={8}>
						<Input type="text" ref="name" label="Skill" onChange={this.handleChange}
							labelClassName="col-md-2" wrapperClassName="col-md-10" value={this.state.name} />
					</Col>
					<Col md={4}>
						<Button type="button" bsStyle="success" onClick={this.saveSkill}>Save</Button>
					</Col>
				</Row>
			</form>
		);
	}
});

export default NewSkill;
