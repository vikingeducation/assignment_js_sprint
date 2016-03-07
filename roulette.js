function Roulette(bankroll) {
  this.bankroll = bankroll;

  this.buyIn = function(amount) {
    this.bankroll += amount;
  }

  this.spin = function(bet, target) {
    if ( bet <= 0 ) {
      console.log("You have to bet a positive amount...");
      return false;
    }
    if ( bet > this.bankroll ) {
      console.log("You don't have enough money...");
      return false;
    }
    var number = this.randomNumber();
    if ( target == "Even" ) {
      this.resolveBet(number % 2 == 0, number, bet, 2 )
    } else {
      this.resolveBet(number == target, number, bet, 35 )
    }
  }

  this.resolveBet = function(victory, number, bet, payout) {
    if (victory) {
      this.winSpin(number, bet, payout)
    } else {
      this.loseSpin(number, bet)
    }
  }

  this.loseSpin = function(number, bet) {
    this.bankroll -= bet;
    console.log("You Lose, the spin was " + number + " :(");
    this.logBankroll();
  }

  this.winSpin = function(number, bet, payout) {
    var winnings = bet * payout;
    this.bankroll += winnings;
    console.log("You Win $" + winnings + ", the spin was " + number);
    this.logBankroll();
  }

  this.logBankroll = function() {
    console.log("You now have " + this.bankroll);
  }

  this.randomNumber = function() {
    return Math.floor( Math.random() * 35 ) + 1;
  }
}
