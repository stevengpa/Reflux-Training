import Reflux from 'reflux';
import Actions from '../actions/skills';
import { Notify } from '../utils/stepByStep';

const state = {
	skills: [],
	message: null,
	type: null,
	title: null,
	action: null
};

const Stores = Reflux.createStore({
	listenables: Actions,
	getInitialState() {
		return state;
	},
	/*
	init() {
		// Listen specifics
		//this.listenTo(actions.skillAdded, this.onAddSkill);
		//this.listenTo(actions.skillGetAll, this.onGetSkills);

		// Listen to many
		//this.listenToMany(actions);
	},
	*/
	onAlert(type, title, message) {
		Notify('success', '[SKILLS STORE] -> onAlert');
		state.message = message;
		state.type = type;
		state.title = title;
		this.emitChange('onAlert');
	},
	onCleanAlert() {
		Notify('success', '[SKILLS STORE] -> onCleanAlert');
		state.message = null;
		state.type = null;
		state.title = null;
		this.emitChange('onCleanAlert');
	},
	onGetSkills() {
		Notify('success', '[SKILLS STORE] -> onGetSkills');
		this.emitChange('onGetSkills');
	},
	onGetSkillsCompleted(skills) {
		Notify('success', '[SKILLS STORE] -> onGetSkillsCompleted');
		state.skills = skills.data;
		this.emitChange('onGetSkillsCompleted');
	},
	onGetSkillsFailed(error) {
		Notify('error', '[SKILLS STORE] -> onGetSkillsFailed');
		state.message = error;
		state.type = 'error';
		this.emitChange('onGetSkillsFailed');
	},
	onAddSkill() {
		Notify('success', '[SKILLS STORE] -> onAddSkill');
		this.emitChange('onAddSkill');
	},
	onAddSkillCompleted(skills) {
		Notify('success', '[SKILLS STORE] -> onAddSkillCompleted');
		state.skills = skills.data;
		this.emitChange('onAddSkillCompleted');
	},
	onAddSkillFailed(error) {
		Notify('error', '[SKILLS STORE] -> onAddSkillFailed');
		state.message = error;
		state.type = 'error';
		this.emitChange('onAddSkillFailed');
	},
	onDeleteSkill() {
		Notify('success', '[SKILLS STORE] -> onDeleteSkill');
		this.emitChange('onDeleteSkill');
	},
	onDeleteSkillCompleted(skills) {
		Notify('success', '[SKILLS STORE] -> onDeleteSkillCompleted');
		state.skills = skills.data;
		this.emitChange('onDeleteSkillCompleted');
	},
	onDeleteSkillFailed(error) {
		Notify('error', '[SKILLS STORE] -> onDeleteSkillFailed');
		state.message = error;
		state.type = 'error';
		this.emitChange('onDeleteSkillFailed');
	},
	emitChange(action) {
		state.action = action;
		this.trigger(state);
	}
});

export default Stores;
