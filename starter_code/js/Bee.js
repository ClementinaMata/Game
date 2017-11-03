var canvas = document.getElementById("bee-game");
var ctx = canvas.getContext('2d');

function Bee(x, y) {
  this.x = x;
  this.y = y;
  this.velX = 0;
  this.velY = 0;
  this.width = 50;
  this.height = 30;
  this.speed = 6;
  this.friction = 0.95;
  this.keys = [];
  this.level = 1;
}
//Draw bee function
Bee.prototype.draw = function() {
  var img = new Image();
  img.src = "starter_code/images/bee.png";
  ctx.drawImage(img, this.x, this.y, this.width, this.height);
};
//You lost and restart
Bee.prototype.youLost = function() {
  $('canvas').css('display', 'none');
  $('.second').css('display', 'block');
};
//Stop move function
Bee.prototype.stopMove = function() {
  this.velX = 0;
  this.velY = 0;
  this.speed = 0;
  this.youLost();
};
//next level function
Bee.prototype.youWin = function() {
  if (this.x < panal.x + panal.width &&
    this.x + this.width > panal.x &&
    this.y < panal.y + panal.height &&
    this.height + this.y > panal.y) {
    this.level += 1;
    this.x = 10;
    this.y = 25;
    this.friction += 0.01;
    this.speed += 8;
    chronometer.time = 55;
  }
};
//appears when you win
Bee.prototype.appearCongrats = function() {
  $('canvas').css('display', 'none');
  $('.third').css('display', 'block');
  this.velX = 0;
  this.velY = 0;
  this.speed = 0;
};

Bee.prototype.congratulations = function() {
  if (this.x < panal.x + panal.width &&
    this.x + this.width > panal.x &&
    this.y < panal.y + panal.height &&
    this.height + this.y > panal.y) {
    this.appearCongrats();
  }
};
//keyboard controller
Bee.prototype.controller = function() {
  if (this.keys[38]) {
    if (this.velY > -this.speed) {
      this.velY--;
    }
  }
  if (this.keys[40]) {
    if (this.velY < this.speed) {
      this.velY++;
    }
  }
  if (this.keys[39]) {
    if (this.velX < this.speed) {
      this.velX++;
    }
  }
  if (this.keys[37]) {
    if (this.velX > -this.speed) {
      this.velX--;
    }
  }
  this.velY *= this.friction;
  this.y += this.velY;
  this.velX *= this.friction;
  this.x += this.velX;
};
