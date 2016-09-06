function Checkers() {

  this.board = [];
  this.init = function() {
    for (var i = 0; i < 8; i++) {
      this.board.push(new Array(8));
    }
    var color = 'X';
    for (var i = 0; i < 3; i++) {
      this.board[i] = this.board[i].map(function(ele, index) {
        console.log(index);
        if (i % 2 === 0 && index % 2 !== 0) {
          return color;
        } else if (i % 2 !== 0 && index % 2 === 0) {
          return color;
        }
      });
    }
    color = 'O'
    for (var i = 5; i < 8; i++) {
      this.board[i] = this.board[i].map(function(ele, index) {
        if (i % 2 === 0 && index % 2 !== 0) {
          return color;
        } else if (i % 2 !== 0 && index % 2 === 0) {
          return color;
        }
      });
    }
  };

  this.display = function() {
    console.log(this.board);
  }

  this.move = function(from, to) {

  }
}

var c = new Checkers();
c.init();
c.display();
