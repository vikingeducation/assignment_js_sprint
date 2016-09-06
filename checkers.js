// function Board(){
//   this.board = function() {
//     var newArray = new Array(8);
//     for(var i = 0; i < newArray.length; i++){
//       newArray[i] = new Array(8);
//     }
//     return newArray;
//   };
// }

function Move() {
  this.legalMove = function(move, player) {
    if (player.color === "b")
  };

  this.spaceTaken = {

  }
}

function Player(color) {
  this.pieceCount = 12;

  this.color = color;

  this.askForMove = function() {
  };

  this.positions = function() {
    if (this.color === "b") {
      return blackPiecePositions;
    } else {
      return redPiecePositions;
    };
  };

  this.changePosition = function(piece, move) {
    pos = this.positions();
    pos[piece] += move;
  }

  var redPiecePositions = {
    "1": 0,
    "2": 2,
    "3": 4,
    "4": 6,
    "5": 8,
    "6": 10,
    "7": 12,
    "8": 14,
    "9": 16,
    "10": 18,
    "11": 20,
    "12": 22
  };

  var blackPiecePositions = {
    "1": 62 + 1,
    "2": 60 + 1,
    "3": 58 + 1,
    "4": 56 + 1,
    "5": 54 + 1,
    "6": 52 + 1,
    "7": 50 + 1,
    "8": 48 + 1,
    "9": 46 + 1,
    "10": 44 + 1,
    "11": 42 + 1,
    "12": 40 + 1
  };
}

function Game() {

  var gameOver = function(player1, player2){
    if (player1.pieceCount === 0){
      console.log("Player 2 wins");
      return true;
    }
    else if (player2.pieceCount === 0){
      console.log("Player 1 wins");
      return true;
    }
    else {
      return false;
    }
  };

  var getMove = function(player) {
    player.askForMove
  }

  this.play = function(redPlayer, blackPlayer) {

    var turnMap = {
      1: redPlayer,
      2: blackPlayer
    }

    var turn = "1"

    while ( gameOver(redPlayer, blackPlayer) === false ) {
      getMove(turnMap[turn]);
      turn = turn === "1" ? "2" : "1";
    }
  }
}

// board > Checker
// pieces on board tiles > Player (12 pieces starting)
//   piece has a location on board (determined by index of board array)
// allowable moves, something to determine if we can move somewhere
// check pieces still left for player, if not they lose
// game play loop
//

// Array of 0..63
// spots are covered,starting, 12 pieces each team staggered
// possible moves for player at 0 side, can only have moves +7 or +9
// for every position that % 7 === 0 then no right move, and if % 8 === 0 then no left move
