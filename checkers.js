function Checkers(){
    alert("This ran!");
    move = function(origin, destination){
      playerOneTurn = !playerOneTurn;
    };

    gameboard = function(){
    };

    setup = function(){
    };

    playerOneTurn = true;

};

function Piece(piece_color, x_pos, y_pos ){
  this.piece_color = piece_color;
  this.x_pos = x_pos;
  this.y_pos = y_pos;
};


// $(".red").html(String("RED PIECE"));

$(document).ready(function(){
  var checkers = new Checkers();
});
