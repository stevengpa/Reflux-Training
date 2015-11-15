import PNotify from './pnotify';
window.PNotify = PNotify;

let stepCounter = 1;
const stepByStep = false;

export const Notify = function (type, message) {
	if (stepByStep) {
		new PNotify({
          title: 'Step #' + stepCounter,
          type: type,
          text: message,
					icon: false,
					hide: false
      });
	}
	console.log(stepCounter + ' - ' + message);
	stepCounter++;
};

export const resetNotify = function () {
	stepCounter = 1;
	PNotify.removeAll();
};
