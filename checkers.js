var board = [];

var player = "X"

var render = function(board) {
  board.forEach(function(row) {
    var output = ""
    for (var i = 0; i < row.length; i++) {
      if (row[i]) {
        output += '[' + row[i] + ']';
      } else {
        output += '[ ]';
      }
    }
    console.log(output);
  });
};

var move = function() {
  var from = prompt("Player " + player + ", choose a piece. (e.g. 2,3)");
  var to = prompt("Choose the destination. (e.g. 2,3)");
  board[from.split(",")[0]][from.split(",")[1]] = undefined;
  board[to.split(",")[0]][to.split(",")[1]] = player;
};

var change_player = function() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
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
  board = rows;
  for (var i = 0; i < 3; i++) {
    if (i % 2 === 0) {
      j = 1;
    } else {
      j = 0;
    }
    for (;j < 8; j += 2) {
      board[i][j] = "X";
    }
  }
  for (var i = 5; i < 8; i++) {
    if (i % 2 === 0) {
      j = 1;
    } else {
      j = 0;
    }
    for (;j < 8; j += 2) {
      board[i][j] = "O";
    }
  }
};

//   array of 8x8

//  piece
//   king?
//   player