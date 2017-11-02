$('canvas').css('display', 'none');
$('.second').css('display', 'none');
$('.third').css('display', 'none');

var canvas = document.getElementById("bee-game")
var ctx = canvas.getContext('2d')

var bee = new Bee(10, 25);
var panal = new Panal(467, 480);
var time = new Time (500,20);

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
      map.levelOne();
      // time.draw();
      bee.youWin();
      break;
    case 2:
      createLevelTwo();
      createCollisionTwo();
      map.levelTwo();
      bee.youWin();
      break;
    case 3:
      createLevelThree()
      createCollisionThree();
      map.levelThree();
      bee.congratulations();
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

var audio = new Audio("music.mp3");
audio.play();
//start page disappears
$("#start-button").on('click', function() {
  $('.first').css('display', 'none');
  $('canvas').css('display', 'block');
})
//when you loose, redirects to start page
$('.second').on('click', function() {
  location.reload();
});
//when you win, redirects to start page
$('#play-again').on('click', function() {
  location.reload();
});
