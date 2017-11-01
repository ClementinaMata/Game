var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Bee(x, y, speed) {
  this.x = x
  this.y = y
  this.velY = 0
  this.velX = 0
  this.width = 50
  this.height = 30
  this.speed = speed
  this.friction = 0.95
  this.keys = []
  this.win = false;
}

Bee.prototype.draw = function(){
  var img = new Image()
  img.src = "./images/bee.png";
  ctx.drawImage (img, this.x, this.y, this.width, this.height);
};
Bee.prototype.stopMove = function(){
    this.velX = 0;
    this.velY = 0;
    this.speed = 0;
};

Bee.prototype.youWin = function (){
  if (this.x < panal.x + panal.width &&
     this.x + this.width > panal.x &&
     this.y < panal.y + panal.height &&
     this.height + this.y > panal.y) {
    this.win = true;
 }
}
