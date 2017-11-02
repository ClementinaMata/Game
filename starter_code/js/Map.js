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
}

Map.prototype.levelOne = function() {
  ctx.fillText("Level 1",520,25);
  ctx.font="20px Arial";
}

Map.prototype.levelTwo = function() {
  ctx.fillText("Level 2",520,25);
  ctx.font="20px Arial";
}

Map.prototype.levelThree = function() {
  ctx.fillText("Level 3",520,25);
  ctx.font="20px Arial";
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

//lines level three
var map15 = new Map(110, 0, 5, 460);
var map16 = new Map(220, 120, 5, 530);
var map17 = new Map(220, 120, 260, 5);
var map18 = new Map(480, 120, 5, 230);
var map19 = new Map(360, 480, 260, 5);
var map20 = new Map(360, 260, 5, 220);

//draw lines level one
function createLevelOne() {
  map.paintBoard();
  map1.paintBoard();
  map2.paintBoard();
  map3.paintBoard();

}

//draw lines level two
function createLevelTwo() {
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
//draw lines level three
function createLevelThree() {
  map15.paintBoard();
  map16.paintBoard();
  map17.paintBoard();
  map18.paintBoard();
  map19.paintBoard();
  map20.paintBoard();

}
