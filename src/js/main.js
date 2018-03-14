import { sayHi } from './module.js';
import { init} from './colorGame.js';
import '../less/colorGame.less';

window.onload = function() {
  init();
};
sayHi();