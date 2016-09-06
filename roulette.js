function Roulette (bankroll) {
  this.bankroll: bankroll,
  this.spin: function (wager, num) {
    var spinResult = Math.floor((Math.random() * 36) + 1);
    if (num === spinResult) {
      this.bankroll += wager * 35;
    } else {
      this.bankroll -= wager;
    }
  }, 
  this.buyIn: function (amnt) {
    this.bankroll += amnt;
  }
}