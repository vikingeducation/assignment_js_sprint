function Roulette(initialAmount) {
  this.bankAmount = initialAmount;

  this.bankroll = function () {
    console.log("You now have $" + this.bankAmount);
  };

  this.spin = function (amount, bet) {
    if(amount > this.bankAmount) {
      console.log("You don't have sufficient balance.");
    }
    else {
      var current_spin = Math.round(Math.random()*36) + 1;
      if(bet == current_spin){
        var amount_won = amount * 35;
        this.bankAmount += amount_won;
        console.log("You Win $" + amount_won +", the spin was " + bet + "!!!");
        console.log("You now have $" + this.bankAmount);
      }
      else{
        this.bankAmount -= amount;
        console.log("You Lose, the spin was " + current_spin + ".");
        console.log("You now have $" + this.bankAmount);
      }
    }
  };

  this.buyIn = function (amount) {
    console.log("You bought in $" + amount);
    this.bankAmount += amount;
    console.log("You now have $" + this.bankAmount);
  };
}
