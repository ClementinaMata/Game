var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

// var chrono = 35;

function Time() {
var counter = 35;
var callbackFunction = function () {
  console.log(counter);
  // chrono = ("0" + "counter").slice(-2);
  timeoutId = setTimeout(callbackFunction, 1000);
  counter -= 1;
  if (counter < 0) {
    clearTimeout(timeoutId);
    bee.stopMove();
  }
}
var timeoutId = setTimeout(callbackFunction, 1000);
}

Time.prototype.draw = function() {
ctx.fillText("Time left: ",counter,x,y);
ctx.font="30px Arial";
};
