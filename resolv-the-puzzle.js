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
function Square(xPosition, yPosition) {
 // Properties.
 this.xPos = xPosition; this.yPos = yPosition;

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

// Class Board.
function Board() {
 // Properties.
 this.points = new Array(); this.points[0] = 0; this.points[1] = 180; this.points[2] = 360; this.points[3] = 540;
 this.squares = new Array(); for (i = 0, y = 0; y < 3; y++) for (x = 0; x < 3; x++, i++) this.squares[i] = new Square(this.points[x], this.points[y]);

 // Methods.
 this.getCell = function(xPixel, yPixel) {
  var cell = new Object();

  if (xPixel >= this.x0 && xPixel < this.x1) cell.x = 0;
  else if (xPixel >= this.x1 && xPixel < this.x2) cell.x = 1;
  else if (xPixel >= this.x2 && xPixel < this.x3) cell.x = 2;
  else return null;

  if (yPixel >= this.y0 && yPixel < this.y1) cell.y = 0;
  else if (yPixel >= this.y1 && yPixel < this.y2) cell.y = 1;
  else if (yPixel >= this.y2 && yPixel < this.y3) cell.y = 2;
  else return null;

  return cell;
 };
 this.canMove = function(cell) {
  if (squareMoving == null) {
   for (i = 1; i < 9; i++) {
    var leftCell = new Object(); var topCell = new Object(); var rightCell = new Object(); var bottomCell = new Object();
    var seek1 = this.getCell(this.squares[i].xPos, this.squares[i].yPos);
    if (cell.x == seek1.x && cell.y == seek1.y) {
     if (cell.x == 0) { leftCell.x = null; topCell.x = 0;    rightCell.x = 1;    bottomCell.x = 0;    }
     if (cell.x == 1) { leftCell.x = 0;    topCell.x = 1;    rightCell.x = 2;    bottomCell.x = 1;    }
     if (cell.x == 2) { leftCell.x = 1;    topCell.x = 2;    rightCell.x = null; bottomCell.x = 2;    }
     if (cell.y == 0) { leftCell.y = 0;    topCell.y = null; rightCell.y = 0;    bottomCell.y = 1;    }
     if (cell.y == 1) { leftCell.y = 1;    topCell.y = 0;    rightCell.y = 1;    bottomCell.y = 2;    }
     if (cell.y == 2) { leftCell.y = 2;    topCell.y = 1;    rightCell.y = 2;    bottomCell.y = null; }

     for (j = 1; j < 9; j++) {
      var seek2 = this.getCell(this.squares[j].xPos, this.squares[j].yPos);
      if (leftCell != null) {
       if (seek2.x == leftCell.x && seek2.y == leftCell.y) leftCell = null;
      }
      if (topCell != null) {
       if (seek2.x == topCell.x && seek2.y == topCell.y) topCell = null;
      }
      if (rightCell != null) {
       if (seek2.x == rightCell.x && seek2.y == rightCell.y) rightCell = null;
      }
      if (bottomCell != null) {
       if (seek2.x == bottomCell.x && seek2.y == bottomCell.y) bottomCell = null;
      }
     }
     if (leftCell != null) return leftCell;
     if (topCell != null) return topCell;
     if (rightCell != null) return rightCell;
     if (bottomCell != null) return bottomCell;
    }
   }
  }
  return null;
 };
}

// Creating stuff.
var gameScreen = document.getElementById('gameScreen'); gameScreen.width = 540; gameScreen.height = 540;
var screen = gameScreen.getContext('2d');
var mouse = new MouseListener();
var squareMoving = null;
var board = new Board();

