// var canvas = document.getElementById("bee-game");
// var ctx = canvas.getContext('2d');
//
// function Time() {
//   this.x = 100;
//   this.y = 100;
//
// }
// var chrono = 35;
//
// Time.prototype.second = function() {
//   var counter = 35;
//   var callbackFunction = function() {
//
//     chrono = ("0" + counter).slice(-2);
//     timeoutId = setTimeout(callbackFunction, 1000);
//     counter -= 1;
//     console.log(counter);
//     if (counter < 0) {
//       clearTimeout(timeoutId);
//       bee.stopMove();
//     }
//   };
//   var timeoutId = setTimeout(callbackFunction, 0);
// };
//
//
// Time.prototype.draw = function() {
//   ctx.fillText("Time left: " + chrono, 382, 25);
//   ctx.font = "30px Arial";
// };
