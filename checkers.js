// board constructor
  // init
    // boardArr
  // rearrangeBoard
  // isValidMove
  // blackCount
  // redCount

// player constructor
  // init
    // color

  // get_move
  // valid_choice

// game contructor
  // play
  // check for win
  //

function Checkers() {

  this.init = function() {
    this.board = new Board;
    this.player1 = new Player("r");
    this.player2 = new Player("b");
  };

  this.play = function() {
    while(!gameOver){
      this.player1.move;
      this.player2.move;
    };
  };

  this.gameOver = function() {
    return (this.board.colorCounter["b"] === 0 ||
            this.board.colorCounter["r"] === 0 )
  };

};

function Board(){

  this.init = function(){
    this.boardArr = new Array(10);
    for(var i = 0; i < 10; i++){
      if(i % 2 === 0){
      this.boardArr[i] = [null, "b", null, "b", null, "empty", null, "r", null, "r"];
      }
      else{
        this.boardArr[i] = ["b", null, "b", null, "empty", null, "r", null, "r", null];
      }
    }
  };

  this.colorCounter = function(){
    var colorCounts = {"b": 0, "r": 0};
    for (var x = 0; x < 10; x++){
      for (var y =0; y < 10; y++){
        if (this.boardArr[x][y] === "b"){
          colorCounts["b"] += 1;
        }
        else if (this.boardArr[x][y] === "r"){
          colorCounts["r"] += 1;
        }
      }
    }
    return colorCounts;
  }
}

function Player(color){

  this.color = color;

  this.getMove = function(){
    var move = prompt("Where would you like to move?");
    move = move.split(",").map(function(el){ parseInt(el, 10); });
    if (this.validMove(move)){
      return move;
    }
    else{
      this.getMove();
    }
  };

  this.validMove = function(move){
    return move[0] >= 1 && move[0] <= 10 && move[1] >=1 && move[1] <= 10;
  }

}