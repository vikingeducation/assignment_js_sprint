function Roulette(starting) {
  this.bankroll = starting;
  this.spin = function(bet, choice) {
    this.bankroll -= bet;
    result = (Math.floor(Math.random() * 35) + 1);
    if (choice === result) {
      this.bankroll += bet * 35;
      console.log("You win $" + bet*35 + ", the spin was " + result);
    } else {
      console.log("You lose, the spin was " + result);
    };
    console.log("You now have $" + this.bankroll);
  };
  this.buyIn = function(amount) {
    this.bankroll += amount;
    console.log("You bought in $" + amount);
    console.log("You now have $" + this.bankroll);
  };
  this.printBankroll = function() {
    console.log("You currently have $" + this.bankroll + " left");
  }
}

r = new Roulette(100);
r.spin( 10, 24 )
r.spin( 50, 13 )
r.printBankroll()
r.buyIn( 1000 )
// You bought in $1000
// You now have $1390