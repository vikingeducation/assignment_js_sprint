function Checkers() {

  this.board = [];
  this.init = function() {
    for (var i = 0; i < 8; i++) {
      this.board.push(new Array(8));
    }
    var color = 'X';
    for (var topIndex = 0; topIndex < 3; topIndex++) {
      for (var topRow = 0; topRow < this.board[topIndex].length; topRow++) {
        if (topIndex % 2 === 0 && topRow % 2 !== 0) {
          this.board[topIndex][topRow] = color;
        } else if (topIndex % 2 !== 0 && topRow % 2 === 0) {
          this.board[topIndex][topRow] = color;
        }
      }
    }
    var color = 'O';
    for (var bottomIndex = 5; bottomIndex < 8; bottomIndex++) {
      for (var bottomRow = 0; bottomRow < this.board[bottomIndex].length; bottomRow++) {
        if (bottomIndex % 2 === 0 && bottomRow % 2 !== 0) {
          this.board[bottomIndex][bottomRow] = color;
        } else if (bottomIndex % 2 !== 0 && bottomRow % 2 === 0) {
          this.board[bottomIndex][bottomRow] = color;
        }
      }
    }

    // var changeColor = function(ele, index) {
    //   console.log(index);
      // if (i % 2 === 0 && index % 2 !== 0) {
      //   return color;
      // } else if (i % 2 !== 0 && index % 2 === 0) {
      //   return color;
      // }
    // };
    // for (var topIndex = 0; topIndex < 3; topIndex++) {
    //   this.board[topIndex] = this.board[topIndex].map(changeColor);
    // }
    // color = 'O';
    // for (var bottomIndex = 5; bottomIndex < 8; bottomIndex++) {
    //   this.board[bottomIndex] = this.board[bottomIndex].map(changeColor);
    // }
  };

  this.display = function() {
    var stringified = '';
    for (var i = 0; i < this.board.length; i++) {
      var rowString = '';
      for (var j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j]) {
          rowString += this.board[i][j];
        } else {
          rowString += '_';
        }
      }
      stringified += rowString + "\n";
    }
    console.log(stringified);
  };

  this.move = function(from, to) {

  };
}

var c = new Checkers();
c.init();
c.display();
