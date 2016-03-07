var Roulette = function(bankroll) {
  this.bankroll = bankroll;

  // instantiate a wheel with 00 - 36
  this.wheel = (function() {
    var wheel = ["00"];
    for (var i = 0; i <= 36; i++) {
      wheel.push(i.toString());
    }
    return wheel;
  })();
}


Roulette.prototype.spin = function () {
  return this.wheel[Math.floor(Math.random() * this.wheel.length)];
}



Roulette.prototype.single_bet = function(bet, guess) {
  var spin = this.spin();
  // see if they won
  if (guess === spin) {
    console.log("You win, the spin was " + spin);
    this.bankroll += (35*bet);
    console.log("You now have $" + this.bankroll);
  } else {
    console.log("You lost, the spin was " + spin);
    this.bankroll -= bet;
    console.log("You now have $" + this.bankroll);
  }
}