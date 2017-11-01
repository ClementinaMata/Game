var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function Map(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Map.prototype.paintBoard = function() {
  ctx.fillStyle = "#F5B022";
  ctx.fillRect(this.x, this.y, this.width, this.height)
}

//lines level one
var map = new Map(0, 100, 500, 5);
var map1 = new Map(100, 230, 500, 5);
var map2 = new Map(0, 360, 500, 5);
var map3 = new Map(100, 480, 500, 5);


//lines level two
var map4 = new Map(0, 100, 500, 5);
var map5 = new Map(300, 230, 500, 5);
var map6 = new Map(200, 100, 5, 100);
var map7 = new Map(300, 230, 5, 100);
var map8 = new Map(100, 330, 205, 5);
var map9 = new Map(100, 230, 5, 250);
var map10 = new Map(200, 450, 5, 150);
var map11 = new Map(300, 300, 5, 150);
var map12 = new Map(410, 350, 5, 250);
var map13 = new Map(410, 350, 80, 5);
var map14 = new Map(490, 350, 5, 140);

function createLevelOne (){
  map.paintBoard();
  map1.paintBoard();
  map2.paintBoard();
  map3.paintBoard();
}

function createLevelTwo (){
  map4.paintBoard();
  map5.paintBoard();
  map6.paintBoard();
  map7.paintBoard();
  map8.paintBoard();
  map9.paintBoard();
  map10.paintBoard();
  map11.paintBoard();
  map12.paintBoard();
  map13.paintBoard();
  map14.paintBoard();
}
