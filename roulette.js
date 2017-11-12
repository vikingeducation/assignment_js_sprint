let index = 1,
  players = {},
  player = {
    log: function() {
      return this
    },
    cash: 100
  };
player.__proto__.buyIn = function(amount) {
  this.cash += amount
  this.showCash()
}
player.__proto__.roll = function(number, bet, type = "none") {
  var rolled = Math.round(Math.random() * 36)
  var match = ""
  if (number === "none") {
    switch (type) {
      case "even":
        if (rolled % 2 === 0) {
          match = true
        }
        break;
      case "odd":
        if (rolled % 2 !== 0) {
          match = true;
        }
        break;
      case "1 to 18":
        if (rolled > 0 && rolled < 18) {
          match = true;
        }
        break;
      case "19 to 36":
        if (rolled > 18 && rolled < 37) {
          match = true;
        }
        break;
      case "1st 12":
        if (rolled > 0 && rolled < 13) {
          match = true;
        }
        break;
      case "2nd 12":
        if (rolled > 12 && rolled < 25) {
          match = true;
        }
        break;
      case "3rd 12":
        if (rolled > 24 && rolled < 37) {
          match = true;
        }
        break;
    }
    console.log(match, number, rolled)
  } else {
    number <= 36 ? console.log(match, number, rolled) : console.log(`${number} too large`)
    match = number === rolled
  }
  if(match){
    this.cash += bet
    console.log( `you won ${bet} ${this.cash} is your new total` )
  } else {
    this.cash -= bet;
    console.log( `you lost ${bet} ${this.cash} is your new total` );
  }
}
player.__proto__.showCash = function() {
  console.log(this.cash)
}
while (index < 3) {
  players["player" + index] = Object.create(player)
  index++
}
let {
  player1,
  player2
} = players
