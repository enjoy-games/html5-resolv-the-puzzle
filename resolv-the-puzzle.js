// Class MouseListener.
function MouseListener() {
 // Properties.
 this.x = null; this.y = null;

 // Methods.
 this.listenMousedown = function(e) {
  var e = e || window.event;

  this.x = e.pageX - screen.offsetLeft;
  this.y = e.pageY - screen.offsetTop;
 };
 this.listenMouseup = function(e) {
  this.x = null;
  this.y = null;
 };
}

// Class Square.
function Square(position) {
 // Properties.
 this.xPos = position[0]; this.yPos = position[1];

 // Methods.
 this.setPosition = function(lastX, lastY) {
  if (this.xPos < lastX) xPos += 1;
  else if (this.xPos > lastX) xPos -= 1;

  if (this.yPos < lastY) yPos += 1;
  else if (this.yPos > lastY) yPos -= 1;

  if (this.xPos == lastX && this.yPos == lastY) {
   clearInterval(squareMoving);
   squareMoving = null;
  }
 };
}

// Creating stuff.
var gameScreen = document.getElementById('gameScreen'); gameScreen.width = 540; gameScreen.height = 540;
var screen = gameScreen.getContext('2d');
var mouse = new MouseListener();
var squareMoving = null;
