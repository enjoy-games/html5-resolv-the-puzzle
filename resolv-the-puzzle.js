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

// Creating stuff.
var gameScreen = document.getElementById('gameScreen'); gameScreen.width = 540; gameScreen.height = 540;
var screen = gameScreen.getContext('2d');
var mouse = new MouseListener();
