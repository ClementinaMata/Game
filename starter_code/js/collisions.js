var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

function collisionCanvas() {
  if (bee.x >= 550) {
    bee.stopMove();
  } else if (bee.x <= 0) {
    bee.stopMove();
  }
  if (bee.y >= 565) {
    bee.stopMove();
  } else if (bee.y <= 5) {
    bee.stopMove();
  }
}
function mapCollisions(maps) {
  if (bee.x < maps.x + maps.width &&
    bee.x + bee.width > maps.x &&
    bee.y < maps.y + maps.height &&
    bee.height + bee.y > maps.y) {
    bee.stopMove();
  }
}
function createCollisionOne() {
  mapCollisions(map)
  mapCollisions(map1)
  mapCollisions(map2)
  mapCollisions(map3)
}

function createCollisionTwo() {
  mapCollisions(map4)
  mapCollisions(map5)
  mapCollisions(map6)
  mapCollisions(map7)
  mapCollisions(map8)
  mapCollisions(map9)
  mapCollisions(map10)
  mapCollisions(map11)
  mapCollisions(map12)
  mapCollisions(map13)
  mapCollisions(map14)
}
