// 10x10 board, each player has 20 pieces to start

// [[0,1,0,2,0,3,0,4,0,5],
// ...
// ]

// Checkers.move(b, left or right?)

// two possible moves, without jumping:
// [-1,1] (left), [1,1] (right)

var Checkers = function() {
  this.board = Array.matrix(10,10, 0);
  // black pieces
  this.board[0] = [0,1,0,2,0,3,0,4,0,5];
  this.board[1] = [6,0,7,0,8,0,9,0,10,0];
  this.board[2] = [0,11,0,12,0,13,0,14,0,15];
  this.board[3] = [16,0,17,0,18,0,19,0,20,0];

  // yellow pieces
  this.board[6] = [0,21,0,22,0,23,0,24,0,25];
  this.board[7] = [26,0,27,0,28,0,29,0,30,0];
  this.board[8] = [0,31,0,32,0,33,0,34,0,35];
  this.board[9] = [36,0,37,0,38,0,39,0,40,0];

};


Array.matrix = function(numRows, numCols, value) {
  var arr = [];
  for (var i = 0; i < numRows; i++) {
    var columns = [];
    for (var j = 0; j < numCols; j++) {
      columns[j] = value;
    }
    arr[i] = columns;
  }
  return arr;
}

// [-1,-1][][]
// [][][]
// [][][]



Checkers.prototype.possible_moves = function(board) {

}