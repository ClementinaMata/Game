var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Panal (x,y) {
  this.x = x;
  this.y = y;
}

Panal.prototype.draw=function(panal){
  var img = new Image()
  img.src = "./images/panal.png";
    ctx.drawImage(img, this.x, this.y, 110, 70)
}
