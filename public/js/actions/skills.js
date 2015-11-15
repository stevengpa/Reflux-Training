import Reflux from 'reflux';
import axios from 'axios';
import { Notify } from '../utils/stepByStep';

const Actions = Reflux.createActions([
	'alert',
	'cleanAlert'
]);

Actions.getSkills = Reflux.createAction({ asyncResult: true });
Actions.addSkill = Reflux.createAction({ asyncResult: true });
Actions.deleteSkill = Reflux.createAction({ asyncResult: true });

Actions.getSkills.listen(() => {
	const self = Actions.getSkills;
	Notify('default', '[SKILLS ACTIONS] -> getSkills');

	axios.get('/api/skills')
		.then((result) => {
			Notify('default', '[SKILLS ACTIONS] -> getSkills -> completed');
			return self.completed(result);
		})
		.catch((error) => {
			Notify('default', '[SKILLS ACTIONS] -> getSkills -> failed');
			return self.failed(error);
		});
});

Actions.addSkill.listen((name) => {
	const self = Actions.addSkill;
	Notify('default', '[SKILLS ACTIONS] -> addSkill');

	axios.post('/api/skills', { name: name })
		.then((result) => {
			Notify('default', '[SKILLS ACTIONS] -> addSkill -> completed');
			return self.completed(result);
		})
		.catch((error) => {
			Notify('default', '[SKILLS ACTIONS] -> addSkill -> failed');
			return self.failed(error);
		});
});

Actions.deleteSkill.listen((id) => {
	const self = Actions.deleteSkill;
	Notify('default', '[SKILLS ACTIONS] -> deleteSkill');

	axios.delete('/api/skills', {params: {id: id}})
		.then((result) => {
			Notify('default', '[SKILLS ACTIONS] -> deleteSkill -> completed');
			return self.completed(result);
		})
		.catch((error) => {
			Notify('default', '[SKILLS ACTIONS] -> deleteSkill -> failed');
			return self.failed(error);
		});
});

// Called before the action emit the event
Actions.alert.preEmit = function() {
	Notify('default', '[SKILLS ACTIONS] -> alert');
};

Actions.cleanAlert.preEmit = function() {
	Notify('default', '[SKILLS ACTIONS] -> cleanAlert');
};

/*
// Called after preemit and before the event, return true to continue
Actions.addSkill.shouldEmit = function(value) {
	console.log('[SKILLS ACTIONS] -> shouldEmit');
	return true;
};
*/

export default Actions;
