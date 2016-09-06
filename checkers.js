// 10 x 10 board
// 20 per side

var board = []
for(var i = 0; i < 10; i ++) {
  board.push([])
}

for (var i = 0; i < 4; i++) {
  if (i % 2 === 0) {
    var j = 1;
  }
  else {
    var j = 0;
  }
  for (j; j < 10; j += 2) {
    board[i][j] = "b";
  }
}

for(var i = 4; i < 6; i++) {
  for (var j = 0; j < 10; j ++) {
    board[i][j] = undefined;
  }
}

for (var i = 6; i < 10; i++) {
  if (i % 2 === 0) {
    var j = 1;
  }
  else {
    var j = 0;
  }
  for (j; j < 10; j += 2) {
    board[i][j] = "r";
  }
}

function changeBoard(board)
for(var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j ++) {
    if (board[i][j] = undefined) {
      board[i][j] = "_";
    }
  }
}

function printBoard(board) {
  changeBoard(board);
  for(var i = 0; i < 10; i ++) {
    console.log(board[i]);
  }
}

