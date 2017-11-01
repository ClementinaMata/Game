var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Panal (x,y) {
  this.x = x
  this.y = y
  this.width = 110
  this.height = 70
}

Panal.prototype.draw=function(panal){
  var img = new Image()
  img.src = "./images/panal.png";
    ctx.drawImage(img, this.x, this.y, this.width, this.height)
}
