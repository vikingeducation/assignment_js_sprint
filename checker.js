//checkers


// Things to display:
//score
//move/turn count
//times
//board
//best piece per player (their kill count)


//Things that happen in the game:
  //moves, normal and king's backward movement
  //jumps, multiple and single jumps
  //king a piece

//Data representation
  //2 types of objects (normal checkers & kings )
  //The board is a 2-D array of null or an object
  //All objects need some sense of direction

//objects
  //Checker
    //White / Black
    //Kill count
    //Alive / Dead
    //Movement ? Thing to differentiate king from normal
  //King
    //White / Black
    //Kill count
    //Alive / Dead
    //Movement ? Thing to differentiate king from normal


//TODO: implement the game loop where the game gathers input from you
  //idk man


//TODO: implement this later
//generate names for the pieces and players
var random_name_generator = function(){
  let name = "Dank Memez"     //filler text
  return name
}

//constructor function for making checker objects
var Checker = function(color, started_at_origin, board) {
  this.color = color
  this.alive = true
  this.position = [null, null]
  //some movent function???
  this.kill_count = 0
  this.times_moved = 0
  this.name = random_name_generator()
  this.started_at_origin = started_at_origin    //true if that color started at the [0,0] side of the board
  this.board = board
  if (this.started_at_origin){
    this.left = [1,-1]
    this.right = [1,1]
    this.bleft = [-1,-1]
    this.bright = [-1,1]
  }else{
    this.left = [-1,-1]
    this.right = [-1,1]
    this.bleft = [1,-1]
    this.bright = [1,1]
  }

  //how should I handle imputs????????      //specify location to location for moves???
  //inputs are per move, you can use radian, clock face, or degrees
  //maybe left / right : bleft / bright works better
    //yeah definitely...
    //input : [move or jump] [coordinates(row, column)] [direction]
    //m bleft / m left / m right/ m bright
    //it's oriented to the piece itself so if black is top m left goes down the board

  //helper functions
  this.new_position = function(position1, position2){
    return [ position1[0] + position2[0], position1[1] + position2[1] ]
  }
  this.is_tile_empty = function(location){
    if (location[0] <= 7 && location[0] >= 0 && location[1] <= 7 && location[1] >= 0){
      //it's on the board at least, now is there a checker piece already there?
      if ( this.board.board[location[0]][location[1]] != null ){
        //ohhh nooo... there's a piece there
        console.log("There's a piece there")
        //console.log(this.board.board[location[0]][location[1]] )
        //console.log(location)
        return false
      }
    }else{
      console.log("Can't move pieces off the board!!")
      //console.log(location)
      return false
    }
    return true
  }
  this.find_direction = function(direction){
    var move = undefined
    switch (direction) {
      case "left":
        move = this.left
        break;
      case "right":
        move = this.right
        break;
      default:
        console.log("Error")
    }
    return move
  }

  this.move = function(direction){
    //select move based on direction given
    var move = undefined
    switch (direction) {
      case "left":
        move = this.left
        break;
      case "right":
        move = this.right
        break;
      default:
        console.log("Error")
    }
    var new_location = this.new_position(this.position, move)
    //check new location
    if (!this.is_tile_empty(new_location)){
      return false
    }

    //move piece
    this.board.move(this.position, new_location)
    this.position = new_location
    return true
  }


  //j bleft / j left / j right / j bright
  this.jump = function(direction){

    //check that move(s) is/are legal
      //check that you can move to this new location
      //a jump is double the distance of a normal move
      var move = this.find_direction(direction)
      var jumped_piece_location = this.new_position(move, this.position)
      move = this.new_position(move, move)
      var new_location = this.new_position(this.position, move)
      //console.log(this.position)
      //console.log(jumped_piece_location)
      //console.log(new_location)

      if (!this.is_tile_empty(new_location)){
        return false
      }

      //check that there is a piece to legally jump
      if (this.is_tile_empty(jumped_piece_location)){
        console.log("There's no piece to jump")
        return false
      }else{
        //console.log(jumped_piece_location)
        var jumped_piece = this.board.board[jumped_piece_location[0]][jumped_piece_location[1]]
        //console.log(jumped_piece)
        if (this.color == jumped_piece.color){
          console.log("You can't jump your own piece!")
          return false
        }
      }
    //discard jumped piece(s)
      //this.board.remove(jumped_piece_location)
      //this.board.jump(this.position, jumped_piece_location)

    //move piece
    this.board.move(this.position, new_location)
    this.position = new_location

  }
}
var King = function(color) {

}
var Board = function(){
  //Board
    //2d array
    //white on right (so white tile on rightmost tile of the bottom row and on the leftmost tile of the top row)
    //do I need some sort of indicator of whether a tile is black or white??
    //should tiles be objects???
      //advantages:
      //disadvantages:

      //I'll have the board handle the input parsing
      //parse out the separate moves
        //example [black's turn] j 1,2 right left right
          //jump1 : 1,2 -> jump checker at 2,3 -> land at 3,4
          //jump2 : jump checker at 4,3 -> land at 5,2
          //jump2 : jump checker at 6,3 -> land at 7,4

  //make board
  this.board = []
  for(i = 0; i < 8; i++){
    var row = []
    for(j = 0; j < 8; j++){
      row[j] = null
    }
    this.board.push(row)
  }

  //make pieces     //each side starts with twelve pieces
  var white_pieces = []
  var black_pieces = []
  for(i = 0; i < 12; i++){
    //call constructor function
    var white_piece = new Checker("white", false, this)
    var black_piece = new Checker("black", true, this)
    white_pieces.push(white_piece)
    black_pieces.push(black_piece)
  }

  //note an easy way to find if a sqaure is black or white is :
    //(x - y) % 2 == 0 then white
    //(x - y) % 2 != 0 then black

  //place pieces      //THIS WORKS!!!
  //starting with i = 0 j = 0 is the topleft of the board which is white
    //TODO: later make it so the color you choose is closer to you
    //for now black is on the top of the board and white is on the bottom
  for(i = 0; i < 8; i++){
    if (i == 3 || i == 4){
      //skip
      continue
    }
    for(j = 0; j < 8; j++){
      if ((i - j) % 2 != 0){            //it's a black tile
        //grab a piece from our pool of pieces,
          // if we've placed all the black pieces then grab a white one
        //console.log("Black tile at " + i + "," + j)
        //console.log("black_pieces.length: " + black_pieces.length )
        //console.log("white_pieces.length: " + white_pieces.length )
        var piece = (black_pieces.length == 0) ? white_pieces.pop() : black_pieces.pop()
        this.board[i][j] = piece
        piece.position = [i, j]
      }else{                            //it's a white tile
        //console.log("White tile at " + i + "," + j)
        continue
      }
    }
  }

  this.move = function(from, to){
    //TODO: remember how to do this with E6 fanciness
    this.board[to[0]][to[1]] = this.board[from[0]][from[1]]
    this.board[from[0]][from[1]] = null
  }

  //PRINT OUT THE BOARD
  this.print_board = function() {
    console.log("White Pieces = 'O'; Black Pieces = 'X'")

    //make a string
    var string = "    1"

    //print out column labels
    for(i = 1; i < 8; i++){
      string += `   ${i+1}`      //space space # space space /// space space space #
    }
    string += '\n'

    //print out checker positions
    for(i = 0; i < 8; i++){
      //string.concat("| ")
      string += `${i+1} `
      string += "| "
      for(j = 0; j < 8; j++){
        if (this.board[i][j] == null){
          string += " "
        }else if (this.board[i][j].color == "black"){
          //string.concat("X")
          string += "X"
        }else if (this.board[i][j].color == "white"){
          //string.concat("O")
          string += "O"
        }
        //string.concat(" |")
        string += " | "
      }
      //string.concat("\n")
      string += '\n'
      //string += '__________'  //ten long '_'
      //string += '__________'
      //string += '_______'     //seven long '_'
    }
    console.log(string)
  }
}

//TEST CODE
var board = new Board()
//does the board print? and are the pieces placed properly?
board.print_board()
var b = board.board
var p = b[2][7]
//Testing Move:
  //legal moves
p.move("left")
board.print_board()
p.move("left")
board.print_board()
  //illegal moves
p.move("left")
p.move("right")
board.print_board()
var w = b[5][4]
  //illegal move
w.move("right")
  //legal jump
w.jump("right")
board.print_board()
b[1][6].move("right")
board.print_board()
  //illegal jump
w.jump("right")
  //illegal jump
p.jump("right")
p.jump("left")
  //test illegal jump b/c there's no piece to jump
b[6][3] = null
p.jump("left")
board.print_board()
b[5][4] = new Checker("black", true, board)
board.print_board()
  //illegal jump over same color piece
p.jump("left")
board.print_board()
b[5][4] = null
board.print_board()

var Game = function() {
  this.turn = 0
  //time
  this.white_score = 0
  this.black_score = 0
  var board = new Board()

  //instructions
  console.log("It is time, to play checkers\n" +
              "Currently there is only a PvP mode\n" +
              "To play, pass p.play() your move as an argument, make sure it's a string (surround it in " "'s)\n" +
              "Here's the input format : [move or jump] [coordinates(row, column)] [direction]\n" +
              "To move or jump type 'm' or 'j', valid coordinates are 1 - 8 and separated with a space\n" +
              "Valid directions are : bleft / left / right/ bright (where b is short for backwards)\n" +
              "Here's an example move for white's first move:\n" +
              'p.play("m 6 1 right")\n' +
              "White's move.\n")
  //put something in to tell them about the different commands besides move and jump
  //maybe include this?? ->              //it's oriented to the piece itself so if black is top m left goes down the board
  this.board.print_board()
  this.play = function(input){
    //parse the input
      //will always be one char for m/j
      //then two numbers
      //then at least one word, but possibly more
    
  }
  this.display_score = function(){
    console.log(`White : ${this.white_score}   Black : ${this.black_score}`)
  }
  this.display_best_units = function() {
    //console.log(`White : ${this.white_score}   Black : ${this.black_score}`)
  }
  this.display_turn = function() {
    console.log(`We're are currently on turn ${this.turn}`)
  }
}

var p = new Game()
p.play()
p.play("m 1,2 left")
