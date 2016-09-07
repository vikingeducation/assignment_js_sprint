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
    while(){

    };
  };

  this.gameOver = function() {
    return (this.board.boardArr.redCount === 0 ||
            this.board.boardArr.blackCount === 0 )
  };
};