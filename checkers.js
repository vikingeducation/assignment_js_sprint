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
  var black_pieces = 20;
  var red_pieces = 20;
  changeBoard(board);
  printBoard(board);
  var current_player = "b";
  var player_coords = null;
  var player_move = null;
  while (black_pieces > 0 && red_pieces > 0) {
    // ask current player for move
    do {
      var player_piece = prompt("Player " + current_player +". What piece do you want to move? Enter in the format: 0,1")
      var piece_coords = player_piece.split(",");
      if (board[piece_coords[0]][piece_coords[1]] !== current_player) {
        console.log("That's not your piece");
        player_piece = false;
      }
    }
    while (player_piece);
      // validate to see if piece is actually theirs
    do {
      var player_move = prompt("Player " + current_player + ". Where do you want to go?")
      var player_move = player_move.split(",");
      //move move for red player
      if (current_player === "r") {
        // validate move for game rules
        //check for x coordinate and check for y coordinate, check for underscore
        // make current player's move
        if ((player_coords[0] + 1 === player_move[0] || player_coords[0] - 1 === player_move[0]) && player_coords[1] + 1 === player_move[1] && board[player_move[0]][player_move[1]] === "_") {
           // move piece
          board[player_move[0]][player_move[1]] = "r";
          current_player = "b"
        }
        else {
          console.log("That is not a valid move");
          player_move = false;
        }
      }
      //make move for black player
      else {
        if ((player_coords[0] + 1 === player_move[0] || player_coords[0] - 1 === player_move[0]) && player_coords[1] - 1 === player_move[1] && board[player_move[0]][player_move[1]] === "_") {
           // move piece
          board[player_move[0]][player_move[1]] = "b";
          current_player = "r"
        }
        else {
          console.log("That is not a valid move");
          player_move = false;
        }
      }
    }
    while(player_move);    
      // remove any piece that's been captured
      // decrease player count by 1
  }
}

