function Board () {
  this.layout = [];
  this.fill = function(rows) {
      var arr = [];
      for (var i=0;i<rows;i++) {
         arr[i] = new Array(rows);
      }
      this.layout = arr;
    };
  this.addPieces = function() {
    // rows are top-level
    // columns are nested
    // first3 rows for white
    // last 3 for black
    // if a row is 0 or 
    
    // fill white 
    for(var i = 0; i < (this.layout.length/2 -1); i++) {
      if (i % 2 === 0) {
        for(j = 1; j < this.layout[i].length; j += 2) {
          this.layout[i][j] = "W";
        }
      } else {
        for(j = 0; j < this.layout[i].length; j += 2) {
          this.layout[i][j] = "W";
        }
      }
    }
    
    // fill black
    for(var i = (this.layout.length -1); i > (this.layout.length/2); i--) {
      if (i % 2 === 0) {
        for(j = 1; j < this.layout[i].length; j += 2) {
          this.layout[i][j] = "B";
        }
      } else {
        for(j = 0; j < this.layout[i].length; j += 2) {
          this.layout[i][j] = "B";
        }
      }
    }
  }
}

function Game () {
  this.board = new Board();
  this.player1 = new Player();
  this.player2 = new Player();
  
}