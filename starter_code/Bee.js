var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Bee(x, y, speed) {
  this.x = x
  this.y = y
  this.velY = 0
  this.velX = 0
  this.speed = speed
  this.friction = 0.95
  this.keys = []
}

Bee.prototype.draw = function(){
  var img = new Image()
  img.src = "./images/bee.png";
  ctx.drawImage (img, this.x, this.y, 50, 30);
};
