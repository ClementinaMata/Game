// $(document).ready(function() {
//
//   $('#start-button').on('click', function() {
//     $('.first').css('display', 'none');


var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 25, 6);
var panal = new Panal(490, 510);
var map = new Map(0,100,500,5);
var map1 = new Map(100,230,500,5);
var map2 = new Map(0,360,500,5);
var map3 = new Map(100,480,500,5);


console.log(bee);
canvas.width = canvas.height = 600;
  map.paintBoard();
  map1.paintBoard();
  map2.paintBoard();
  map3.paintBoard();
  panal.draw();

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


  ctx.clearRect(0, 0, 1000, 1000);
  bee.draw()
  map.paintBoard();
  map1.paintBoard();
  map2.paintBoard();
  map3.paintBoard();
  panal.draw();
}

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
    console.log("YOU WIN!!")
}
update();
// });
// };
