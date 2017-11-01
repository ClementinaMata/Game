var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 25, 6);
var panal = new Panal(490, 510);

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

  if (bee.win) {
    ctx.clearRect(0, 0, 1000, 1000);
    bee.draw();
    panal.draw();
    createLevelTwo ();
    createCollisionTwo();
    bee.youWin();

  } else {

    ctx.clearRect(0, 0, 1000, 1000);
    bee.draw();
    panal.draw();
    createLevelOne ();
    createCollisionOne();
    bee.youWin();

  }
} //fin del update

document.body.addEventListener("keydown", function(e) {
  bee.keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  bee.keys[e.keyCode] = false;
});



update();
