var board = [];
var current_player;
var player1 = new Player("X");
var player2 = new Player("O");
current_player = player1;

var isOver = false;

function Player(symbol) {
  this.symbol = symbol;
  this.pieces = 12;
}

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
  var from;
  var to;

  do {
    from = prompt("Player " + current_player.symbol + ", choose a piece. (e.g. 2,3)");
  } while (board[from.split(",")[0]][from.split(",")[1]] !== current_player.symbol);

  do {
    to = prompt("To the left or the right? (L or R)");
  } while(!makeMove(from.split(",")[0], from.split(",")[1], to);

  // board[from.split(",")[0]][from.split(",")[1]] = undefined;
  // board[to.split(",")[0]][to.split(",")[1]] = current_player.symbol;
};

var change_player = function() {
  if (current_player === player1) {
    current_player = player2;
  } else {
    current_player = player1;
  }
};

var makeMove = function(row, col, direction) {
  row = Number(row);
  col = Number(col);
  var x_change, y_change;
  if (direction === "R") {
    x_change = 1;
  } else {
    x_change = -1;
  }
  if (current_player === player1) {
    y_change = 1;
  } else {
    y_change = -1;
  }
  if (board[row + y_change][col + x_change] === undefined) {
    board[row][col] = undefined;
    board[row + y_change][col + x_change] = current_player.symbol;
    return true;
  }
  return false;
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
function gameBoard() {
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

var play = function() {
  gameBoard();
  var playing = true;

  while(playing) {
    render(board);
    move();

    change_player();

    if (isOver()) {
      playing = false;
    }
  }
};

play();