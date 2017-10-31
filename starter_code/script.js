var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 25, 6);
var panal = new Panal(490, 510);
var map = new Map();


canvas.width = canvas.height = 600;
  bee.draw();
  map.paintBoard();
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
  panal.draw();
  map.paint2(32,14,250,140)
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
// // alert("YOU LOOSE!")
}

update();
