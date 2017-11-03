var canvas = document.getElementById("bee-game");
var ctx = canvas.getContext('2d');

function Chronometer(x,y,nombre){
  this.x = x;
  this.y = y;
  this.element = $("<div>").attr("class", nombre);
  this.element.css({top:this.y, left:this.x, position:"absolute"});
  $("#counter").append(this.element);
  this.time = 45;
}

//Timer function
Chronometer.prototype.updateCounter = function(){
  $(".counter").text("Time left: " +chronometer.time);
  this.time--;
  if(this.time<0){
    bee.stopMove();
  }
};
