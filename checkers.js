"use strict";

function Checkers() {
  //game logic & user interaction
  //validMove
  //makeMove
  //capturePiece
}

//Player
function Player(name) {
  this.name = name;
  this.getsinput = function(){
    var input = prompt("Where would you like to move?");
  };
}

function Board() {
  // creates 8x8 board
  var x;
  var y;
  var board = new Array(8);
  for (x = 0; x < 8; x++) {
    board[x] = new Array(8);
  }
  // filling board with pieces
  // x = row, y = col
  for (x = 0; x<= 7; x++){
    if(x <= 2){
      for (y = 0; y <=7; y++){
        if(x%2 !==0 && y%2 === 0){
          board[x][y]= 0;
        } else if (x%2 ===0 && y%2 !== 0){
          board[x][y]= 0;
        }
      }
    } else if (x >=5){
      for (y = 0; y <=7; y++){
        if(x%2 !==0 && y%2 === 0){
          board[x][y]= 1;
        } else if (x%2 ===0 && y%2 !== 0){
          console.log(x + "," + y);
          board[x][y]= 1;
        }
      }
    }
  }

  this.display = function(){
    for (var x= 0; x<=7; x++){
      console.logboard[x];
      // for (y = 0; y <=7; y++){
      //   if (board[x][y] === undefined){
      //     console.log("_"); // prints on new line
      //   } else {
      //     console.log(board[x][y]);
      //   }
      // }
    }
  };
}