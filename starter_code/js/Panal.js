var canvas = document.getElementById("bee-game");
var ctx = canvas.getContext('2d');

function Panal(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 110;
}

Panal.prototype.draw = function(panal) {
  var img = new Image();
  img.src = "starter_code/images/panal1.png";
  ctx.drawImage(img, this.x, this.y, this.width, this.height);
};
