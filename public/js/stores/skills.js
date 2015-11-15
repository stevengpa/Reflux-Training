import actions from '../actions/skills';

const Stores = Reflux.createStore({
	listenables: actions,
	init() {
		// Listen specifics
		//this.listenTo(actions.skillAdded, this.onSkillAdded);
		//this.listenTo(actions.skillGetAll, this.onSkillGetAll);

		// Listen to many
		//this.listenToMany(actions);
	},
	onSkillAdded() {
		console.log('[SKILLS STORE] -> onSkillAdded');
	},
	onSkillGetAll(arguments) {
		console.log('[SKILLS STORE] -> onSkillGetAll');
		handleSkillGetAll('[SKILLS STORE] -> Handle onSkillGetAll');

		console.log(arguments);
		this.setState({
			skills: []
		});
	},
	onSkillGetAllCompleted() {
		handleSkillGetAll('[SKILLS STORE] -> Handle onSkillGetAllCompleted', 'Completed');
	},
	onSkillGetAllFailed() {
		handleSkillGetAll('[SKILLS STORE] -> Handle onSkillGetAllFailed', 'Failed');
	}
});
