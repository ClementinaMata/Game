var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Map(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Map.prototype.paintBoard = function() {
  ctx.fillStyle="#F5B022";
  ctx.fillRect(this.x, this.y, this.width, this.height)

}
