

var render = function(board) {
  board.forEach(function(row) {
    var output = ""
    row.forEach(function(element) {
      if (element) {
        output += '[' + element + ']';
      } else {
        output += '[ ]';
      }
    });
    console.log(output);
  });
};


// view

//  render board

// controller
//   over?
//   win?
//   tie?

// model
//  player
//   getmove

//  board
function GameBoard() {
  var rows = new Array(8);
  for (var i = 0; i < 8; i++) {
    rows[i] = new Array(8);
  }
  this.board = rows;
}

//   array of 8x8

//  piece
//   king?
//   player