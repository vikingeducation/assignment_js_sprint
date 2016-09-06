function Checkers() {
  this.turn = 'X';
  this.board = [];
  this.init = function() {
    function makeBoard() {
      for (var i = 0; i < 8; i++) {
        this.board.push(new Array(8));
        for (var j = 0; j < 8; j++) {
          this.board[i][j] = "";
        }
      }
    }

    function arrangeMarkers() {
      var color = 'X';

      function changeColor(row) {
        return function(ele, index) {
          if (row % 2 === 0 && index % 2 !== 0) {
            return color;
          } else if (row % 2 !== 0 && index % 2 === 0) {
            return color;
          } else {
            return ele;
          }
        };
      }

      for (var topIndex = 0; topIndex < 3; topIndex++) {
        var boardTopRow = this.board[topIndex];
        this.board[topIndex] = boardTopRow.map(changeColor(topIndex));
      }

      color = 'O';
      for (var bottomIndex = 5; bottomIndex < 8; bottomIndex++) {
        var boardBottomRow = this.board[bottomIndex];
        this.board[bottomIndex] = boardBottomRow.map(changeColor(bottomIndex));
      }
    }

    makeBoard.call(this);
    arrangeMarkers.call(this);
  };

  this.display = function() {
    var stringified = '';
    for (var i = 0; i < this.board.length; i++) {
      var rowString = '';
      for (var j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j]) {
          rowString += '|' + this.board[i][j] + '|';
        } else {
          rowString += '|_|';
        }
      }
      stringified += rowString + "\n";
    }
    console.log(stringified);
  };

  this.move = function(from_row, from_col, to_row, to_col) {
    // var alpha = { 'a':7, 'b':6, 'c':5, 'd':4, 'e':3, 'f':2, 'g':1, 'h':0 }
    var row_diff = from_row - to_row;
    var col_diff = from_col - to_col;

    function validateTo() {
      // Check if within bounds.
      if ((to_row > this.board.length && to_row < 0) && (to_col > this.board[0].length && to_col < 0)) {
        return false;
        // Check if empty space.
      } else if (this.board[to_row][to_col]) {
        return false;
        // Check if it's within movable range.
      } else if (Math.abs(row_diff) > 2 || Math.abs(col_diff) > 2) {
        return false;
      } else if (Math.abs(row_diff) === 1 && Math.abs(col_diff) === 1) {
        this.board[from_row][from_col] = '';
        this.board[to_row][to_col] = this.turn;
      } else if (Math.abs(row_diff) === 2 && Math.abs(col_diff) === 2) {
        if (this.turn == 'X') {
          // row will always increment.
          // going left
          if (Math.abs(col_diff) === (col_diff)) {
            // check if checker in between is an enemy.
            if ((this.board[from_row + 1][from_col - 1]) == 'O') {
              this.board[from_row + 1][from_col - 1] = '';
              return true;
              // going right
            } else {
              // check if checker in between is an enemy.
              if ((this.board[from_row + 1][from_col + 1]) == 'O') {
                this.board[from_row + 1][from_col + 1] = '';
                return true;
              }
            }
          }
        } else if (this.turn == 'O') {
          // row will always decrement.
          // going left
          if (Math.abs(col_diff) === (col_diff)) {
            // check if checker in between is an enemy.
            if ((this.board[from_row - 1][from_col - 1]) == 'X') {
              this.board[from_row - 1][from_col - 1] = '';
              return true;
              // going right
            } else {
              // check if checker in between is an enemy.
              if ((this.board[from_row - 1][from_col + 1]) == 'X') {
                this.board[from_row - 1][from_col + 1] = '';
                return true;
              }
            }
          }
        }
      }
      return false;
    }
    //check if own piece
    if (this.board[from_row][from_col] === this.turn) {
      // if X's then only move in (+) row direction
      if (this.turn === 'X') {
        validateTo.call(this);
        this.turn = this.turn === 'X' ? 'O' : 'X';
        console.log(this.turn)
      }
    } else {
      console.log("can't move that piece");
    }



    // if O'x then only move in (-) row direction


  };
}

var c = new Checkers();
c.init();
c.display();
c.move(2, 7, 3, 6);
c.display();
c.move(5, 4, 4, 5);
c.display();
