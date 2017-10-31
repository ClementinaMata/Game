var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 15, 6)
var panal = new Panal(50, 60)


canvas.width = canvas.height = 500;
  bee.draw();
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

  if (bee.x >= 430) {
    stopMove();
  } else if (bee.x <= 0) {
    stopMove();
  }

  if (bee.y >= 460) {
    stopMove();
  } else if (bee.y <= 5) {
    stopMove();
  }
  ctx.clearRect(0, 0, 1000, 1000);
  bee.draw()
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
