var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function paintBoard() {
  ctx.beginPath();
  ctx.moveTo(50,50);
  ctx.lineTo(100,100);
  ctx.stroke();
}
