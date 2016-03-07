function Piece(color) {
  this.color = color;
}


function Checkers() {

  this.board = new Array(8);

  this.buildBoard = function() {
    for (var i = 0; i < 8 ; i++) {
      this.board[i] = new Array(8);

      for (var j = 0; j < 8 ; j++) {
        if ((i + j) % 2 == 1 ) {
          if (i < 3) {
            this.board[i][j] = new Piece("red");
          } else if (i > 4) {
            this.board[i][j] = new Piece("black");
          }
        }
      }
    }
  };

  this.pieceAt = function(row, col) {
    return this.board[row][col];
  }

  this.colorAt = function(row, col) {
    var piece = this.board[row][col];
    if (piece) {
      return piece.color;
    } else {
      return "";
    }
  };

  this.move = function(from, to) {
    this.board[to[0]][to[1]] = this.pieceAt(from[0], from[1]);
    this.board[from[0]][from[1]] = null;
  }

  this.buildBoard();
}

var renderBoard = function(game) {
  $(".board").html("");
  for (var i = 0; i < game.board.length; ++i) {
    for (var j = 0; j < game.board[i].length; ++j) {
      var space = $($.parseHTML("<div class='space'></div>"));
      space.data("row", i);
      space.data("col", j);
      if ( (i + j) % 2 == 0 ) {
        space.addClass('even');
      }
      var piece = game.pieceAt(i,j);
      if (piece) {
        space.append("<div class='piece " + game.colorAt(i,j) + "'></div>");
      }
      $(".board").append(space);
    }
      $(".board").append("<br>");
  }
};

$(document).ready(function() {
  window.game = new Checkers();
  renderBoard(game);

  var from = null;
  $('.board').on('click', '.space', function(event) {
    if (from) {
      var to = [$(this).data('row'), $(this).data('col')];
      window.game.move(from, to);
      renderBoard(game);
      from = null;
    } else {
      from = [$(this).data('row'), $(this).data('col')];
    }
  });
});

