var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 40, 6)
var panal = new Panal(50, 60)

canvas.width = canvas.height = 500;

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

  if (bee.x >= 495) {
    bee.x = 495;
  } else if (bee.x <= 5) {
    bee.x = 5;
  }

  if (bee.y > 495) {
    bee.y = 495;
  } else if (bee.y <= 5) {
    bee.y = 5;
  }

  ctx.clearRect(0, 0, 1000, 1000);

  ctx.beginPath();
  ctx.arc(bee.x, bee.y, 5, 0, Math.PI * 2);
  ctx.fill();
}

document.body.addEventListener("keydown", function(e) {
  bee.keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  bee.keys[e.keyCode] = false;
});

update();