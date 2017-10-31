var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Map(x, y, destinoX, destinoY){
  this.x = x;
  this.y = y;
  this.destinoX = destinoX;
  this.destinoY = destinoY;
}

Map.prototype.paintBoard = function(){
  ctx.fillRect(0,100,500,5)
  ctx.fillRect(100,230,500,5)
  ctx.fillRect(0,360,500,5)
  ctx.fillRect(100,480,500,5)
  // ctx.beginPath();
  // ctx.moveTo(50,50);
  // ctx.lineTo(100,100);
  // ctx.stroke();
}

Map.prototype.paint2 = function(){
  ctx.beginPath();
  ctx.moveTo(this.x,this.y);
  ctx.lineTo(this.destinoX,this.destinoY);
  ctx.stroke();
}

// Obstacle.prototype.crashWith = function(obstacle){
// return !((this.bottom() < obstacle.top())    ||
//          (this.top()    > obstacle.bottom()) ||
//          (this.right()  < obstacle.left())   ||
//          (this.left()   > obstacle.right()))
// }
