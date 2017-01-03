function Roulette(bankrollStart, houseOdds) {
  this.money = bankrollStart;

  this.wheel = [0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1,"00",27,
    10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2]

  this.spin = function(betAmount, betSpace) {
    computerSpace = Math.ceil(Math.random() * houseOdds);
    console.log("The spin was " + computerSpace);
    if (betSpace == computerSpace) {
      this.payout(35, betAmount);
    } else {
      this.loss(betAmount);
    }
    this.bankroll();
  }

  this.payout = function(odds, betAmount) {
    winnings = betAmount * odds // if 35:1, odds is 35
    this.money += winnings;
    console.log("You win $" + winnings);
  }

  this.loss = function(betAmount) {
    this.money -= betAmount;
    console.log("You lose $" + betAmount);
  }

  this.bankroll = function() {
    console.log("You now have $" + this.money);
  }

  this.buyIn = function(amount) {
    this.money += amount;
  }
}
