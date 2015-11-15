import React from 'react';
import Reflux from 'reflux';
import { Notify } from '../../../utils/stepByStep';
import PNotify from '../../../utils/pnotify';

import SkillStore from '../../../stores/skills';
import SkillActions from '../../../actions/skills';

export default React.createClass({
	mixins:[Reflux.listenTo(SkillStore, 'onAlert')],
	onAlert(state) {
		if (state.action === 'onAlert') {
			Notify('info', '[ALERT CP] -> onAlert');
			new PNotify({
        title: state.title,
        text: state.message,
        type: state.type
			});
			Notify('info', '[ALERT CP] -> cleanAlert');
			SkillActions.cleanAlert();
		}
	},
	render() {
		return null;
	}
});
