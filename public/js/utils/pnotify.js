const $ = require('jquery');
global.jQuery = $;
const PNotify = require('../../libs/pnotify/pnotify.js');
require('../../libs/pnotify/pnotify.buttons.js');
require('../../libs/pnotify/pnotify.callbacks.js');
require('../../libs/pnotify/pnotify.confirm.js');
require('../../libs/pnotify/pnotify.desktop.js');
require('../../libs/pnotify/pnotify.history.js');
require('../../libs/pnotify/pnotify.nonblock.js');

global.PNotify = PNotify;
module.exports = global.PNotify;
delete global.jQuery;
