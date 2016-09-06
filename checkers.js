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
          rowString += '|'+this.board[i][j]+'|';
        } else {
          rowString += '|_|';
        }
      }
      stringified += rowString + "\n";
    }
    console.log(stringified);
  };

  this.move = function(from_row, from_col, to_row, to_col) {
    function validiate() {
      if((to_row > this.board.length && to_row < 0) && (to_col > this.board[0].length && to_col < 0)) {
        return false;
      } else if(this.board[to_row][to_col]) {
        return false;
      } else if(Math.abs(from_row - to_row) > 2 || Math.abs(from_col - to_col) > 2) {
        return false;
      }
    }
    //check if own piece
    if (this.board[from_row][from_col] === this.turn) {
      // if X's then only move in (+) row direction
      if (this.turn === 'X') {
        // up one row, to the left and right
        if (to_row || )
        // if enemy occupies one of those squares, check up two rows and diagonal over the enemy.
      }
    } else {
      console.log ("can't move that piece")
    }



// if O'x then only move in (-) row direction


  };
}

var c = new Checkers();
c.init();
c.display();
