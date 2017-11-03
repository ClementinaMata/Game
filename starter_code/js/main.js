$('canvas').css('display', 'none');
$('.second').css('display', 'none');
$('.third').css('display', 'none');

var canvas = document.getElementById("bee-game");
var ctx = canvas.getContext('2d');

var bee = new Bee(10, 25);
var panal = new Panal(467, 480);
var chronometer = new Chronometer(850,22,'counter');


canvas.width = canvas.height = 600;

function update() {
  requestAnimationFrame(update);
  bee.controller();
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
  ctx.clearRect(0, 0, 1000, 1000);
  bee.draw();
  panal.draw();

  function mapCollisions(maps) {
    if (bee.x < maps.x + maps.width &&
      bee.x + bee.width > maps.x &&
      bee.y < maps.y + maps.height &&
      bee.height + bee.y > maps.y) {
      bee.stopMove();
    }
  }
//switch to change levels
  switch (bee.level) {
    case 1:
      createLevelOne();
      mapCollisions(map);
      mapCollisions(map1);
      mapCollisions(map2);
      mapCollisions(map3);
      map.levelOne();
      bee.youWin();
      break;
    case 2:
      createLevelTwo();
      mapCollisions(map4);
      mapCollisions(map5);
      mapCollisions(map6);
      mapCollisions(map7);
      mapCollisions(map8);
      mapCollisions(map9);
      mapCollisions(map10);
      mapCollisions(map11);
      mapCollisions(map12);
      mapCollisions(map13);
      mapCollisions(map14);
      map.levelTwo();
      bee.youWin();
      break;
    case 3:
      createLevelThree();
      mapCollisions(map15);
      mapCollisions(map16);
      mapCollisions(map17);
      mapCollisions(map18);
      mapCollisions(map19);
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

var audio = new Audio("starter_code/music.mp3");
audio.play();

//start page disappears
$("#start-button").on('click', function() {
  $('.first').css('display', 'none');
  $('canvas').css('display', 'block');
  chronometer.updateCounter();
  setInterval(function(){chronometer.updateCounter();}, 1000);


});
//when you loose, redirects to start page
$('.second').on('click', function() {
  location.reload();

});
//when you win, redirects to start page
$('#play-again').on('click', function() {
  location.reload();
});
