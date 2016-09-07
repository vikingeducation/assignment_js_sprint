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
    var alpha = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    var stringified = '';
    for (var i = 0; i < this.board.length; i++) {
      var rowString = alpha[i] + ' ';
      for (var j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j]) {
          rowString += '|' + this.board[i][j] + '|';
        } else {
          rowString += '|_|';
        }
      }
      stringified += rowString + "\n";
    }
    stringified += "   1  2  3  4  5  6  7  8 \n"
    return stringified;
  };

  this.move = function(alpha_from_row, from_col, alpha_to_row, to_col) {
    var alpha = {
      'a': 7,
      'b': 6,
      'c': 5,
      'd': 4,
      'e': 3,
      'f': 2,
      'g': 1,
      'h': 0
    }
    var from_row = alpha[alpha_from_row];
    var to_row = alpha[alpha_to_row];
    from_col -= 1;
    to_col -= 1;
    var row_diff = from_row - to_row;
    var col_diff = from_col - to_col;

    function checkWithinBounds() {
      return !((to_row > this.board.length && to_row < 0) && (to_col > this.board[0].length && to_col < 0));
    }

    function checkEmptySpace() {
      return this.board[to_row][to_col] === '';
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

    function clearPlayerMarker() {
      this.board[to_row][to_col] = this.turn;
      this.board[from_row][from_col] = '';
    }

    // check if marker in-between is an enemy.
    function checkEnemyMarker() {
      // row decrements if X's turn, and increments on O's turn
      var rowCoords = this.turn == 'X' ? from_row + 1 : from_row - 1;
      var enemyMarker = this.turn == 'X' ? 'O' : 'X';
      // going left
      if ((this.board[rowCoords][from_col - 1]) == enemyMarker) {
        this.board[rowCoords][from_col - 1] = '';
        clearPlayerMarker.call(this);
        // going right
      } else if ((this.board[rowCoords][from_col + 1]) == enemyMarker) {
        this.board[rowCoords][from_col + 1] = '';
        clearPlayerMarker.call(this);
      }
    }

    function movementCheck() {
      // Check if within bounds.
      if (checkWithinBounds.call(this)) {
        // Check if empty space.
        if (checkEmptySpace.call(this)) {
          if (checkExcessiveDistance.call(this)) {
            return false;
          }
          if (checkOneSpace.call(this)) {
            clearPlayerMarker.call(this);
          }
          if (checkTwoSpace.call(this)) {
            checkEnemyMarker.call(this);
          }
        }
      }
    }

    //check if own piece
    if (this.board[from_row][from_col] === this.turn) {
      movementCheck.call(this);
      this.turn = this.turn === 'X' ? 'O' : 'X';
      console.log("It is " + this.turn + "'s turn to move \n");
    }
  };
}

var c = new Checkers();
c.init();
c.display();
c.move('f', 8, 'e', 7);
c.display();
c.move('c', 5, 'd', 6);
c.display();
c.move('e', 7, 'c', 5);
c.display();
c.move('b', 4, 'c', 5);
console.log(c.display());

$(document).ready(function() {
  var board = c.board;
  var turn = c.turn;
  var $boardDiv = $('#board');
  var alpha = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  board.forEach(function(row, index) {
    var rowString = alpha[index] + ' ';
    for (i = 0; i < row.length; i++) {
      if (row[i]) {
        rowString += '|' + row[i] + '|';
      } else {
        rowString += '|_|';
      }
    }
    $boardDiv.append('<li>' + rowString + '</li>');
  });
  $boardDiv.append('<li>' + "&nbsp&nbsp 1 &nbsp2 &nbsp3 &nbsp4 &nbsp5 &nbsp6 &nbsp7 &nbsp8 " + '</li>');

  $boardDiv.append('<p>It is ' + turn + "'s turn to move </p>");
  $('#play').click(function() {
    var move_from = prompt("please select a piece to move");
    var move_to = prompt("please where to move");
  });
});
