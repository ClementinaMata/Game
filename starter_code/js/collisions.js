var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')


function createCollisionOne() {
  if (bee.x < map.x + map.width &&
    bee.x + bee.width > map.x &&
    bee.y < map.y + map.height &&
    bee.height + bee.y > map.y) {
    bee.stopMove();
  }

  if (bee.x < map1.x + map1.width &&
    bee.x + bee.width > map1.x &&
    bee.y < map1.y + map1.height &&
    bee.height + bee.y > map1.y) {
    bee.stopMove();
  }

  if (bee.x < map2.x + map2.width &&
    bee.x + bee.width > map2.x &&
    bee.y < map2.y + map2.height &&
    bee.height + bee.y > map2.y) {
    bee.stopMove();
  }

  if (bee.x < map3.x + map3.width &&
    bee.x + bee.width > map3.x &&
    bee.y < map3.y + map3.height &&
    bee.height + bee.y > map3.y) {
    bee.stopMove();
  }
}


function createCollisionTwo() {
  if (bee.x < map4.x + map4.width &&
    bee.x + bee.width > map4.x &&
    bee.y < map4.y + map4.height &&
    bee.height + bee.y > map4.y) {
    bee.stopMove();
  }
  if (bee.x < map5.x + map5.width &&
    bee.x + bee.width > map5.x &&
    bee.y < map5.y + map5.height &&
    bee.height + bee.y > map5.y) {
    bee.stopMove();
  }
  if (bee.x < map6.x + map6.width &&
    bee.x + bee.width > map6.x &&
    bee.y < map6.y + map6.height &&
    bee.height + bee.y > map6.y) {
    bee.stopMove();
  }
  if (bee.x < map7.x + map7.width &&
    bee.x + bee.width > map7.x &&
    bee.y < map7.y + map7.height &&
    bee.height + bee.y > map7.y) {
    bee.stopMove();
  }
  if (bee.x < map8.x + map8.width &&
    bee.x + bee.width > map8.x &&
    bee.y < map8.y + map8.height &&
    bee.height + bee.y > map8.y) {
    bee.stopMove();
  }
  if (bee.x < map9.x + map9.width &&
    bee.x + bee.width > map9.x &&
    bee.y < map9.y + map9.height &&
    bee.height + bee.y > map9.y) {
    bee.stopMove();
  }
  if (bee.x < map10.x + map10.width &&
    bee.x + bee.width > map10.x &&
    bee.y < map10.y + map10.height &&
    bee.height + bee.y > map10.y) {
    bee.stopMove();
  }
  if (bee.x < map11.x + map11.width &&
    bee.x + bee.width > map11.x &&
    bee.y < map11.y + map11.height &&
    bee.height + bee.y > map11.y) {
    bee.stopMove();
  }
  if (bee.x < map12.x + map12.width &&
    bee.x + bee.width > map12.x &&
    bee.y < map12.y + map12.height &&
    bee.height + bee.y > map12.y) {
    bee.stopMove();
  }
  if (bee.x < map13.x + map13.width &&
    bee.x + bee.width > map13.x &&
    bee.y < map13.y + map13.height &&
    bee.height + bee.y > map13.y) {
    bee.stopMove();
  }
  if (bee.x < map14.x + map14.width &&
    bee.x + bee.width > map14.x &&
    bee.y < map14.y + map14.height &&
    bee.height + bee.y > map14.y) {
    bee.stopMove();
  }
}
