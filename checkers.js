function Board() {
  this.grid = [ [ "0", "w", "0", "w", "0", "w", "0", "w" ],
                [ "w", "0", "w", "0", "w", "0", "w", "0" ],
                [ "0", "w", "0", "w", "0", "w", "0", "w" ],
                [ "0", "0", "0", "0", "0", "0", "0", "0" ],
                [ "0", "0", "0", "0", "0", "0", "0", "0" ],
                [ "r", "0", "r", "0", "r", "0", "r", "0" ],
                [ "0", "r", "0", "r", "0", "r", "0", "r" ],
                [ "r", "0", "r", "0", "r", "0", "r", "0" ] ];

  for ( var row = 0; row < 8; row++ ) {
    for ( var col = 0; col < 8; col++ ) {
      if ( this.grid[row][col] === "w" ) {
        this.grid[row][col] = new Piece( [row,col], "white", "man" );
      } else if ( this.grid[row][col] === "r" ) {
        this.grid[row][col] = new Piece( [row,col], "red", "man" );
      } else {
        this.grid[row][col] = 0;
      }
    }
  }

  this.display = function() {
    for ( var row = 0; row < 8; row++ ) {
      var rowString = ""
      for ( var col = 0; col < 8; col++ ) {
        var square = this.grid[row][col]
        if ( square === 0 ) {
          rowString += "   ";
        } else if ( square.color === "white" ) {
          if (square.rank === "man" ) {
            rowString += " w ";
          } else {
            rowString += " W ";
          }
        } else {
          if (square.rank === "man" ) {
            rowString += " r ";
          } else {
            rowString += " R ";
          }
        }
      }
      console.log(rowString);
    }
  }
}

function Piece( position, color, rank ) {
  this.color = color; // red or white
  this.rank = rank;   // man or king
  this.position = position;
}
