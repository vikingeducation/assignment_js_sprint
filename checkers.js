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

function changeBoard(board) {
  for(var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j ++) {
      if (board[i][j] === undefined) {
        board[i][j] = "_";
      }
    }
  }
}

function printBoard(board) {
  console.log("  0,1,2,3,4,5,6,7,8,9")
  for(var i = 0; i < 10; i ++) {
    console.log(i + " " + board[i]);
  }
}

function playGame(board) {
  changeBoard(board);
  printBoard(board);
  var current_player = "b";
  while (black_pieces > 0 && red_pieces > 0) {
    // ask current player for move
    do {
      var player_piece = prompt("Player " + current_player +". What piece do you want to move? Enter in the format: 0,1")
      var piece_coords = player_piece.split(",")
      if board[piece_coords[0]][piece_coords[1]] !== current_player {
        console.log("That's not your piece")
        player_piece = false
        break;
      }
    }
    while (player_piece) 
      // validate to see if piece is actually theirs
      // validate move for game rules
    // make current player's move
     // move piece
     // remove any piece that's been captured
      // decrease player count by 1
  }

}

