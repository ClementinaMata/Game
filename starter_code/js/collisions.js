var canvas = document.getElementById("bee-game");
var ctx = canvas.getContext('2d');

//Collisions borders
function collisionCanvas() {
  // if (bee.x >= 550) {
  //   bee.stopMove();
  // } else if (bee.x <= 0) {
  //   bee.stopMove();
  // }
  // if (bee.y >= 565) {
  //   bee.stopMove();
  // } else if (bee.y <= 5) {
  //   bee.stopMove();
  // }
}
//Function collisions
function mapCollisions(maps) {
  if (bee.x < maps.x + maps.width &&
    bee.x + bee.width > maps.x &&
    bee.y < maps.y + maps.height &&
    bee.height + bee.y > maps.y) {
    bee.stopMove();
  }
}
//Collisions level one
function createCollisionOne() {
  // mapCollisions(map);
  // mapCollisions(map1);
  // mapCollisions(map2);
  // mapCollisions(map3);
}
//Collisions level two
function createCollisionTwo() {
  // mapCollisions(map4);
  // mapCollisions(map5);
  // mapCollisions(map6);
  // mapCollisions(map7);
  // mapCollisions(map8);
  // mapCollisions(map9);
  // mapCollisions(map10);
  // mapCollisions(map11);
  // mapCollisions(map12);
  // mapCollisions(map13);
  // mapCollisions(map14);
}
//Collisions level three
function createCollisionThree() {
  // mapCollisions(map15);
  // mapCollisions(map16);
  // mapCollisions(map17);
  // mapCollisions(map18);
  // mapCollisions(map19);
}
