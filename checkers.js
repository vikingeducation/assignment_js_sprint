var board = [];
var current_player;
var player1 = new Player("X");
var player2 = new Player("O");
current_player = player1;

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
    to = prompt("Choose the destination. (e.g. 2,3)");
  } while(isValidMove(to.split(",")[0], to.split(",")[1]));

  board[from.split(",")[0]][from.split(",")[1]] = undefined;
  board[to.split(",")[0]][to.split(",")[1]] = current_player.symbol;
};

var change_player = function() {
  if (current_player === player1) {
    current_player = player2;
  } else {
    current_player = player1;
  }
};

var isValidMove = function(row, col) {

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