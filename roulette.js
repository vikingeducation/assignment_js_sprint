function Roulette(startingAmount) {
  this.bankrollAmount = startingAmount;

  this.bankroll = function() {
    console.log("You now have $" + this.bankrollAmount);
  };

  this.buyIn = function(amount) {
    this.bankrollAmount += amount;
  };

  this.spin = function(bet, num) {
    var spinResult = Math.floor(Math.random() * 35) + 1
    if (num === spinResult) {
      this.result(bet * 35, spinResult, "win");
    } else {
      this.result(-bet, spinResult, "lose");
    }
  };

  this.result = function(amount, spinResult, str) {
    this.buyIn(amount);
    console.log("You " + str + " $" + Math.abs(amount) + ", the spin was " + spinResult);
    this.bankroll();
  };
}
