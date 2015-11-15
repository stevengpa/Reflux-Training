import React from 'react';
import Reflux from 'reflux';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Notify } from '../../../utils/stepByStep';
import _ from 'lodash';

import SkillStore from '../../../stores/skills';
import SkillActions from '../../../actions/skills';

const GridSkill = React.createClass({
	mixins: [
		//Reflux.listenTo(SkillStore, 'onAlert'),
		Reflux.listenTo(SkillStore, 'onDeleteSkillCompleted'),
		Reflux.listenTo(SkillStore, 'onDeleteSkillFailed')
	],
	getInititalState() {
		return {
			activePage: 1
		}
	},
	/*
	onAlert(state) {
		if (state.action === 'onAlert') {
			Notify('info', '[GRID SKILL CP] -> onAlert');
			new PNotify({
        title: state.title,
        text: state.message,
        type: state.type
			});
			Notify('info', '[GRID SKILL CP] -> cleanAlert');
			SkillActions.cleanAlert();
		}
	},
	*/
	onDeleteSkillCompleted(state) {
		if (state.action === 'onDeleteSkillCompleted') {
			Notify('info', '[GRID SKILL CP] -> onDeleteSkillCompleted');
			Notify('info', '[GRID SKILL CP] -> alert');
			SkillActions.alert('success', 'Skill', 'The skill was successfully deleted.');
			this.setState({name: null});
		}
	},
	onDeleteSkillFailed(state) {
		if (state.action === 'onDeleteSkillFailed') {
			Notify('info', '[GRID SKILL CP] -> onDeleteSkillFailed');
			SkillActions.alert('error', 'Skill', 'Ups! Something wrong happened during the skill delete process.');
		}
	},
	handleSelect(event, selectedEvent) {
    this.setState({
      activePage: selectedEvent.eventKey
    });
  },
  delSkill(cid) {
		if (!_.isNaN(cid)) {
			Notify('info', '[GRID SKILL CP] -> deleteSkill');
			SkillActions.deleteSkill(cid);
		}
  },
  deleteFormat(cell, row) {
		return (
			<Button bsStyle="link" onClick={this.delSkill.bind(null, row.cid)}>
				<Glyphicon glyph="trash" />
			</Button>
		);
  },
	render() {
		return (
			<Grid>
				<Row className="show-grid">
					<Col md={2} />
					<Col md={8}>
						<BootstrapTable data={this.props.skills}
							pagination={true} striped={true} hover={true} condensed={true}
						>
							<TableHeaderColumn dataField="cid" isKey={true} width="60" dataAlign="center">
								id
							</TableHeaderColumn>
							<TableHeaderColumn dataField="name">Skill name</TableHeaderColumn>
							<TableHeaderColumn dataFormat={this.deleteFormat} width="100" dataAlign="center" />
						</BootstrapTable>
					</Col>
					<Col md={2} />
				</Row>
			</Grid>
		);
	}
});

export default GridSkill;
