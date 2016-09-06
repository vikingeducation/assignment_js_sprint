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

    function checkWithinBounds() {
      return (to_row > this.board.length && to_row < 0) && (to_col > this.board[0].length && to_col < 0);
    }

    function checkEmptySpace() {
      return this.board[to_row][to_col];
    }

    function checkExcessiveDistance() {
      return Math.abs(row_diff) > 2 || Math.abs(col_diff) > 2;
    }

    function checkOneSpace() {
      return Math.abs(row_diff) === 1 && Math.abs(col_diff) === 1;
    }

    function checkTwoSpace() {
      return Math.abs(row_diff) === 2 && Math.abs(col_diff) === 2;
    }

    // check if marker in-between is an enemy.
    function checkEnemyMarker() {
      // row decrements if X's turn, and increments on O's turn
      var rowCoords = this.turn == 'X' ? from_row + 1 : from_row - 1;
      var enemyMarker = this.turn == 'X' ? 'O' : 'X';
      // going left
      if ((this.board[rowCoords][from_col - 1]) == enemyMarker) {
        this.board[rowCoords][from_col - 1] = '';
      // going right
      } else if ((this.board[rowCoords][from_col + 1]) == enemyMarker) {
        this.board[rowCoords][from_col + 1] = '';
      }
    }

    function movementCheck() {
      // Check if within bounds.
      checkWithinBounds.call(this);
      // Check if empty space.
      checkEmptySpace.call(this);
      checkExcessiveDistance.call(this);
      if (checkOneSpace.call(this)) {
        this.board[from_row][from_col] = '';
        this.board[to_row][to_col] = this.turn;
      }
      if (checkTwoSpace.call(this)) {
        if (Math.abs(col_diff) === (col_diff)) {
          checkEnemyMarker.call(this);
        }
      }
    }

    //check if own piece
    if (this.board[from_row][from_col] === this.turn) {
      movementCheck.call(this);
      this.turn = this.turn === 'X' ? 'O' : 'X';
      console.log(this.turn);
    }
  };
}

var c = new Checkers();
c.init();
c.display();
c.move(2, 7, 3, 6);
c.display();
c.move(5, 4, 4, 5);
c.display();
