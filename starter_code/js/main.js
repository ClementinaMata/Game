// $(document).ready(function() {
//
//   $('#start-button').on('click', function() {
//     $('.first').css('display', 'none');

var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 25, 6);
var panal = new Panal(490, 510);
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

var win = false

canvas.width = canvas.height = 600;

function update() {
  requestAnimationFrame(update);
  if (bee.keys[38]) {
    if (bee.velY > -bee.speed) {
      bee.velY--;
    }
  }
  if (bee.keys[40]) {
    if (bee.velY < bee.speed) {
      bee.velY++;
    }
  }
  if (bee.keys[39]) {
    if (bee.velX < bee.speed) {
      bee.velX++;
    }
  }
  if (bee.keys[37]) {
    if (bee.velX > -bee.speed) {
      bee.velX--;
    }
  }
  bee.velY *= bee.friction;
  bee.y += bee.velY;
  bee.velX *= bee.friction;
  bee.x += bee.velX;


  if (bee.x < map.x + map.width &&
    bee.x + bee.width > map.x &&
    bee.y < map.y + map.height &&
    bee.height + bee.y > map.y) {
    stopMove();
  }

  if (bee.x < map1.x + map1.width &&
    bee.x + bee.width > map1.x &&
    bee.y < map1.y + map1.height &&
    bee.height + bee.y > map1.y) {
    stopMove();
  }

  if (bee.x < map2.x + map2.width &&
    bee.x + bee.width > map2.x &&
    bee.y < map2.y + map2.height &&
    bee.height + bee.y > map2.y) {
    stopMove();
  }

  if (bee.x < map3.x + map3.width &&
    bee.x + bee.width > map3.x &&
    bee.y < map3.y + map3.height &&
    bee.height + bee.y > map3.y) {
    stopMove();
  }


  if (bee.x < panal.x + panal.width &&
    bee.x + bee.width > panal.x &&
    bee.y < panal.y + panal.height &&
    bee.height + bee.y > panal.y) {
    youWin();
  }

  if (bee.x >= 550) {
    stopMove();
  } else if (bee.x <= 0) {
    stopMove();
  }
  if (bee.y >= 565) {
    stopMove();
  } else if (bee.y <= 5) {
    stopMove();
  }
  if (win) {
    ctx.clearRect(0, 0, 1000, 1000);
    bee.draw()
    panal.draw();
    bee.x = 10
    bee.y = 40;
    bee.friction = 0.99
    bee.speed = 6
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


    if (bee.x < map4.x + map4.width &&
      bee.x + bee.width > map4.x &&
      bee.y < map4.y + map4.height &&
      bee.height + bee.y > map4.y) {
      stopMove();
    }
    if (bee.x < map5.x + map5.width &&
      bee.x + bee.width > map4.x &&
      bee.y < map5.y + map5.height &&
      bee.height + bee.y > map5.y) {
      stopMove();
    }
    if (bee.x < map6.x + map6.width &&
      bee.x + bee.width > map6.x &&
      bee.y < map6.y + map6.height &&
      bee.height + bee.y > map6.y) {
      stopMove();
    }
    if (bee.x < map7.x + map7.width &&
      bee.x + bee.width > map7.x &&
      bee.y < map7.y + map7.height &&
      bee.height + bee.y > map7.y) {
      stopMove();
    }
    if (bee.x < map8.x + map8.width &&
      bee.x + bee.width > map8.x &&
      bee.y < map8.y + map8.height &&
      bee.height + bee.y > map8.y) {
      stopMove();
    }
    if (bee.x < map9.x + map9.width &&
      bee.x + bee.width > map9.x &&
      bee.y < map9.y + map9.height &&
      bee.height + bee.y > map9.y) {
      stopMove();
    }
    if (bee.x < map10.x + map10.width &&
      bee.x + bee.width > map10.x &&
      bee.y < map10.y + map10.height &&
      bee.height + bee.y > map10.y) {
      stopMove();
    }
    if (bee.x < map11.x + map11.width &&
      bee.x + bee.width > map11.x &&
      bee.y < map11.y + map11.height &&
      bee.height + bee.y > map11.y) {
      stopMove();
    }
    if (bee.x < map12.x + map12.width &&
      bee.x + bee.width > map12.x &&
      bee.y < map12.y + map12.height &&
      bee.height + bee.y > map12.y) {
      stopMove();
    }
    if (bee.x < map13.x + map13.width &&
      bee.x + bee.width > map13.x &&
      bee.y < map13.y + map13.height &&
      bee.height + bee.y > map13.y) {
      stopMove();
    }
    if (bee.x < map14.x + map14.width &&
      bee.x + bee.width > map14.x &&
      bee.y < map14.y + map14.height &&
      bee.height + bee.y > map14.y) {
      stopMove();
    }
  } else {
    ctx.clearRect(0, 0, 1000, 1000);
    bee.draw()
    panal.draw();
    map.paintBoard();
    map1.paintBoard();
    map2.paintBoard();
    map3.paintBoard();
  }
} //fin del update

document.body.addEventListener("keydown", function(e) {
  bee.keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  bee.keys[e.keyCode] = false;
});

function stopMove() {
  bee.velX = 0;
  bee.velY = 0;
  bee.speed = 0;
}

function youWin() {
  win = true
}
update();
// });
// };
