var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Bee(x, y, speed) {
  this.x = x
  this.y = y
  this.velY = 0
  this.velX = 0
  this.speed = speed
  this.friction = 0.98
  this.keys = []
  this.img =
  this.draw = function(){
    var img = new Image()
    img.onload = function() {
      ctx.drawImage(img, this.x, this.y, 70, 40)
    }
    img.src = "./images/bee.png"
  }
}

// Bee.prototype.draw = function(bee){
//   var img = new Image()
//   img.onload = function() {
//     ctx.drawImage(img, this.x, this.y, 70, 40)
//   }
//   img.src = "./images/bee.png"
// }
