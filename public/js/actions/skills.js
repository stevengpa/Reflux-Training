const Actions = Reflux.createActions([
	"skillAdded", // Synchronous
	"skillGetAll" : {children: ["completed", "failed"]} // Asynchronous
]);

// Called before the action emit the event
Actions.skillAdded.preEmit = function() {
	console.log('[SKILLS ACTIONS] -> preEmit');
};

// Called after preemit and before the event, return true to continue
Actions.skillAdded.shouldEmit = function(value) {
	console.log('[SKILLS ACTIONS] -> shouldEmit');
	return true;
};

Actions.ActionMethods.handleSkillGetAll = function(Action, Subaction) {
	console.log('[SKILLS ACTIONS] -> handleSkillGetAll');
	console.log('The on ' + Action + Subaction + ' handler was called.');
};
