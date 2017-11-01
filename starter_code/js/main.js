var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 25, 6);
var panal = new Panal(467, 480);

canvas.width = canvas.height = 600;

function update() {
  requestAnimationFrame(update);
  bee.controller();
  collisionCanvas();

  ctx.clearRect(0, 0, 1000, 1000);
  bee.draw();
  panal.draw();
  switch (bee.level) {
    case 1:
      createLevelOne();
      createCollisionOne();
      bee.youWin();
      break;
    case 2:
      createLevelTwo();
      createCollisionTwo();
      bee.youWin();
      break;
  }
}
document.body.addEventListener("keydown", function(e) {
  bee.keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  bee.keys[e.keyCode] = false;
});
update();
var audio =  new Audio ("music.mp3");
audio.play();
