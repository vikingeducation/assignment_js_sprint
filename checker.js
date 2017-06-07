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

      //input : [move or jump] [coordinates(row, column)] [direction]
      //m bleft / m left / m right/ m bright
      //it's oriented to the piece itself so if black is top m left goes down the board


//TODO: EXTEND THE 'options menu'

//BUG: it won't allow a king to jump in a diamond shape (anything so that he re-enters the tile where he started)
  //

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
  //update functions
  this.die = function() {
    this.alive = false
  }
  this.you_killed = function(){
    this.kill_count++
  }
  this.you_moved = function(){
    this.times_moved++
  }

    //input : [move or jump] [coordinates(row, column)] [direction]
    //m bleft / m left / m right/ m bright
    //it's oriented to the piece itself so if black is top m left goes down the board

  //helper functions
  this.new_position = function(position1, position2){
    return [ position1[0] + position2[0], position1[1] + position2[1] ]
  }
  this.is_tile_empty = function(location, possibly_dead){
    //console.log(location)
    //console.log(possibly_dead)
    if (location[0] <= 7 && location[0] >= 0 && location[1] <= 7 && location[1] >= 0){
      //it's on the board at least, now is there a checker piece already there?
      if ( this.board.board[location[0]][location[1]] != null ){
        //ohhh nooo... there's a piece there
        console.log("There's a piece there")
        if (possibly_dead && possibly_dead.includes(this.board.board[location[0]][location[1]] ) ) {
           //undefined and null are falsy, && evaluation will be lazy
            //if the tile is occupied by a checker in the possibly_dead array we ignore it and report it empty
           return true
        }
        return false
      }
    }else{
      console.log("Can't move pieces off the board!!")
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
    var move = this.find_direction(direction[0])
    var new_location = this.new_position(this.position, move)
    //check new location
    if (!this.is_tile_empty(new_location)){
      return false
    }

    //move piece
    this.board.move(this.position, new_location)
    this.position = new_location
    this.you_moved()
    return true
  }


  //j bleft / j left / j right / j bright
  //direction is a string arg
  //if you wish to check the legality of multiple jumps
  //OK so this is pretty hacky but, I'm using the possibly_dead array as a flag for
  this.jump = function(full_instruction){
      var direction;

      //three arrays to store values we need to remember when checking/doing multiple consequtive jumps
      var possibly_dead = []            //list of pieces that are currently on the board but will have been removed by that jump
      var jump_locations_arr = []       //list of the places you'll land [first -> last]
      var jumped_locations_arr = []     //list of positions of the jumped pieces [first -> last]

    //check that move(s) is/are legal
      //check that you can move to this new location
      //a jump is double the distance of a normal move
      while (full_instruction.length > 0){
        var my_position = (jump_locations_arr.length > 0) ? jump_locations_arr[jump_locations_arr.length - 1] : this.position
        direction = full_instruction.shift()
        var move = this.find_direction(direction)
        var jumped_piece_location = this.new_position(move, my_position)
        move = this.new_position(move, move)
        var new_location = this.new_position(my_position, move)

        if (!this.is_tile_empty(new_location, possibly_dead)){
          return false
        }

        //check that there is a piece to legally jump
        if (this.is_tile_empty(jumped_piece_location, possibly_dead)){
          console.log("There's no piece to jump")
          return false
        }else{
          var jumped_piece = this.board.board[jumped_piece_location[0]][jumped_piece_location[1]]
          if (this.color == jumped_piece.color){
            console.log("You can't jump your own piece!")
            return false
          }
        }
        possibly_dead.push(jumped_piece)
        jumped_locations_arr.push(jumped_piece_location)
        jump_locations_arr.push(new_location)
      }

    while( jump_locations_arr.length > 0){
      //discard jumped piece(s)
      var jumped_piece_location = jumped_locations_arr.shift()
      var new_location = jump_locations_arr.shift()
      this.board.jump(this.position, jumped_piece_location)

      //move piece
      this.board.move(this.position, new_location)
      this.position = new_location
    }
  }
}
//TODO: consider changing this to just change the checker to a king instead of replacing it with a king

var King = function(color) {
  //TODO: implement kings
  //make checker
  //change name
  //add bleft
  //add bright
  //TODO : FIGURE THE BELOW STUFFS OUT
  //I'd like to have it be seen as a king when you inspect it in Chrome or whatever
    //but since if you just change a normal checker to a king by adding some values it'll be seen as a Checker
    //I assume this is because you used 'new Checker()' to create it
      //options : 1) find a way to rename the kind of object
              //  2) find a way to duplicate an object's values when you create a new object
                    //then you'd create a new King() that's a clone of the previous checker with some added stuff

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
  this.dead_white_pieces = []
  this.dead_black_pieces = []
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

  //place pieces
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
        var piece = (black_pieces.length == 0) ? white_pieces.pop() : black_pieces.pop()
        this.board[i][j] = piece
        piece.position = [i, j]
      }else{                            //it's a white tile
        continue
      }
    }
  }

  //modify to disinclude possibly_dead checkers from this
  this.is_tile_empty = function(location, possibly_dead){
    //console.log(location)
    //console.log(possibly_dead)
    if (location[0] <= 7 && location[0] >= 0 && location[1] <= 7 && location[1] >= 0){
      //it's on the board at least, now is there a checker piece already there?
      if ( this.board[location[0]][location[1]] != null ){
        //ohhh nooo... there's a piece there
        console.log("There's a piece there")
        if (possibly_dead && possibly_dead.includes(this.board[location[0]][location[1]] ) ) {
           //undefined and null are falsy, && evaluation will be lazy
            //if the tile is occupied by a checker in the possibly_dead array we ignore it and report it empty
           return true
        }
        return false
      }
    }else{
      console.log("Can't move pieces off the board!!")
      return false
    }
    return true
  }

  this.move = function(from, to){
    //TODO: remember how to do this with E6 fanciness
    this.board[to[0]][to[1]] = this.board[from[0]][from[1]]
    this.board[from[0]][from[1]] = null
  }

  this.jump = function (jumping_piece_location, jumped_piece_location){
    var jumping_piece = this.board[jumping_piece_location[0]][jumping_piece_location[1]]
    var jumped_piece = this.board[jumped_piece_location[0]][jumped_piece_location[1]]

    //make jumped_piece now it's dead
    jumped_piece.die()
    //remove it from the board
    this.board[jumped_piece_location[0]][jumped_piece_location[1]] = null
    //place jumped_piece in pile
    if (jumped_piece.color == "black"){
      this.dead_black_pieces.push(jumped_piece)
    }else{
      this.dead_white_pieces.push(jumped_piece)
    }
    //update victors stats
    jumping_piece.you_killed()

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
/*
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
//END OF TEST CODE
*/


var Game = function() {
  this.turn = 0
  //time
  this.white_score = 0
  this.black_score = 0
  this.board = new Board()
  this.current_move = "white"
  this.print_after_move = false //note later I'm just keeping this as 1 || 0

  this.players = ["white", "black"]
  this.player_i = 0
  this.current_player = this.players[this.player_i]

  //little helper functions...cause i'm lazy
  this.get_current_player = function() {
    return this.players[this.player_i]
  }
  this.get_other_player = function() {
    return this.players[ (this.player_i ^ 1) ]
  }
  this.next_player = function() {
    this.player_i ^= 1  //flips the index back and forth from 0 to 1, and 1 to 0
    return true
  }

  this.instructions = function() {
    //instructions
    console.log("It is time, to play checkers\n" +
                "Currently there is only a PvP mode\n" +
                "To play, pass p.play() your move as an argument, make sure it's a string (surround it in 'quotes')\n" +
                "Here's the input format : [move or jump] [coordinates(row, column)] [direction]\n" +
                "To move or jump type 'm' or 'j', valid coordinates are 1 - 8 and separated with a space\n" +
                "Valid directions are : bleft / left / right/ bright (where b is short for backwards)\n" +
                "Here's an example move for white's first move:\n" +
                'p.play("m 6 1 right")\n' +
                `It's ${this.get_current_player()}'s turn`)
    return true
  }
  this.instructions()
  //put something in to tell them about the different commands besides move and jump
  //maybe include this?? ->              //it's oriented to the piece itself so if black is top m left goes down the board
  this.board.print_board()

  this.play = function(input){
    //parse the input
    if (input == undefined){
      this.instructions()
    }
    var s = input.toLowerCase().split(" ")
      //call the pieces appropriate function
      //first check for inputs that don't specify coordinates
    if (s[0].length > 1){
      switch (s[0]) {
        case "score":
          this.display_score()
          return true
          break;
        case "print":
          this.board.print_board()
          console.log(`It's ${this.get_current_player()}'s turn`)
          return true
          break;
        case "turn":
          this.display_turn()
          return true
          break;
        case ("best_unit" || "best_units" || "best"):
          this.display_best_units()
          return true
          break;
        case ("options"):
          this.options()
          return true
          break;
        default:
          console.log("I'm sorry I don't recognize that command.")
      }
    }


    var piece = this.board.board[+s[1] - 1 ][+s[2] - 1]       //input is 1-indexed, board is stored in 0-index
    //check to make sure that the current player isn't trying to move the other player's checkers
    if (piece.color != this.get_current_player()){
      console.log(`I'm sorry but that's ${piece.color}'s piece'`)
      return true //remember not to execute the rest of the turn
    }
    //var direction = s[3]
    var direction = s.slice(3)    //make sure to get all the args for the multiple jumps
    switch (s[0]) {
      case "m":
        piece.move(direction)
        if (this.print_after_move){
          this.board.print_board()
        }
        break;
      case "j":
        //problem, how do we do multiple jumps ?, I was originally thinking sequentially but
          //then if you input a long series of jumps and mess up on some input it'll only do up to the one you accidentally
            //messed up
          //we should probably check the legality of the jumps separately then do them all at once

          //TODO: FIGURE OUT A SOLUTION TO MULTIPLE JUMPS
            //SOLUTION IN THE BLACK PROGRAMMING NOTEBOOK
          //it seems like repurposing the existing code would be a pain for some weird edge cases
            //alt option: create an alternate board and run all the jumps
        //var direction = s[3]
        /*var possibly_dead = []  //list of jumped pieces
        for(i = 3; i < s.length; i++){
          if (this.board.is_tile_empty()){

          }else{
            //Illegal move, print error and break out
          }

        }*/
        piece.jump(direction)
        if (this.print_after_move){
          this.board.print_board()
        }
        break;
      default:
        console.log("I'm sorry I don't recognize that command.")
    }
      //will always be one char for m/j
      //then two numbers
      //then at least one word, but possibly more

      //TODO: test this later
      //check the board to see if anyone won yet
      if(this.board.dead_white_pieces.length == 12){
        //black won
        this.you_won("black")
      }else if (this.board.dead_black_pieces.length == 12){
        //white won
        this.you_won("white")
      }

      //print who's turn it is now
      this.next_player()
      this.turn++
      console.log(`It's ${this.get_current_player()}'s turn.`)

  }
  this.you_won = function(winner){
    //console log something , maybe some stats too
    //TODO: WRITE THIS
    console.log(`Congratulations ${winner}, you won!`)
  }

  this.move = function(input){
    //parse the input
    //then two numbers
    //then one word
  }
  this.jump = function(input){
    //parse the input
    //then two numbers
    //then at least one word, but possibly more
  }
  this.display_score = function(){
    //update score
    this.white_score = this.board.dead_black_pieces.length
    this.black_score = this.board.dead_white_pieces.length
    //display
    console.log(`White : ${this.white_score}   Black : ${this.black_score}`)
  }
  this.display_best_units = function() {
    //search through the pieces (that aren't dead?)
    var best_white_piece = null
    var best_black_piece = null
    var b_w_k = -1
    var b_b_k = -1
    for (i = 0; i < 8; i++)     {
      for(j = 0; j < 8; j++){
          //is there a piece there?
          if (this.board.board[i][j] != null){
            var piece = this.board.board[i][j]
            if (piece.color == "black" && (piece.kill_count > b_b_k) ){
              best_black_piece = piece
              b_b_k = piece.kill_count
            }else if (piece.color == "white" && (piece.kill_count > b_w_k) ){
              best_white_piece = piece
              b_w_k = piece.kill_count
            }
          }
      }
    }

    //TODO: add if it's a king, it's current location, and favorite beverage?
    console.log(`White's best unit is ${best_white_piece.name}, has jumped ${best_white_piece.kill_count} pieces ` +
                ` and has moved ${best_white_piece.times_moved} times.\n` +
                `Black's best unit is ${best_black_piece.name}, has jumped ${best_black_piece.kill_count} pieces ` +
                ` and has moved ${best_black_piece.times_moved} times.\n`)
  }
  //consider later passing an arg to options or something if you want multiple options
  this.options = function() {
    var s = (this.print_after_move) ? "on" : "off"
    console.log(`Currently the only extra option is to print the board after every move, this is currently ${s}.`)

    //this.print_after_move = !this.print_after_move    //god that seems so verbose, why no boolean flip operator
      //aha! bool flip via XOR bby
    this.print_after_move ^= 1

    s = (this.print_after_move) ? "on" : "off"
    console.log(`Since this is the only available options I'm going to switch that to ${s} now.`)
    return this.print_after_move
  }
  this.display_turn = function() {
    console.log(`We're are currently on turn ${this.turn}`)
  }
}

var p = new Game()
p.play("m 6 1 right")
p.play("options")
p.play("print")
p.play("m 3 2 left")
p.play("m 6 3 right")
//one jump
p.play("j 4 1 right")
p.play("m 5 4 left")
p.play("m 3 6 left")
//two jumps
p.play("j 7 2 right right")
