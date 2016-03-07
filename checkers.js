function Piece(color) {
  this.color = color;
} 


function Checkers() {

  this.board = new Array(8);

  this.buildBoard = function() {

    for (var i = 0; i < 8 ; i++) {
      this.board[i] = new Array(8);
      
      for (var j = 0; i < 8 ; j++) {
        if ((i + j) % 2 == 0 ) {
          if (i < 3) {
            this.board[i][j] = new Piece("B");
          } else if (i > 4) {
            this.board[i][j] = new Piece("W");
          }
        }   
      }
    }
  }
  this.buildBoard();
} 