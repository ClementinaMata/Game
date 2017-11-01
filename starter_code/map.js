var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Map(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Map.prototype.paintBoard = function() {
  ctx.fillRect(this.x, this.y, this.width, this.height)
  // ctx.fillRect(100,230,500,5)
  // ctx.fillRect(0,360,500,5)
  // ctx.fillRect(100,480,500,5)

  //Second Stage
  // ctx.fillRect(0,100,500,5)
  // ctx.fillRect(300,230,500,5)
  // ctx.fillRect(200,100,5,100)
  // ctx.fillRect(300,230,5,100)
  // ctx.fillRect(100,330,205,5)
  // ctx.fillRect(100,230,5,250)
  // ctx.fillRect(200,450,5,150)
  // ctx.fillRect(300,300,5,150)
  // ctx.fillRect(410,350,5,250)
  // ctx.fillRect(410,350,80,5)
  // ctx.fillRect(490,350,5,140)

  //Third Stage

}
