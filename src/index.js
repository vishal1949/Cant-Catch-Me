import _ from 'lodash';
const Game = require('./game');


window.addEventListener('DOMContentLoaded', () => {
    new Game();
})

window.addEventListener('keydown', (e) =>check(e), false);

// let check = (e) => {
//     let code = e.keyCode;
//     switch (code) {
//         case 37: alert("Left"); break; //Left key
//         case 38: alert("Up"); break; //Up key
//         case 39: alert("Right"); break; //Right key
//         case 40: alert("Down"); break; //Down key
//         default: alert(code); //Everything else
//     }
// }
