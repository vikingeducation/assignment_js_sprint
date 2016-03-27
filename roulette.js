function Roulette(bankrollAmount){
  this.bankrollAmount = bankrollAmount;
  this.maxNumber = 36;
  this.minNumber = 1;

  this.spin = function(bet, number){
    var actualNumber = Math.floor(Math.random() * (this.maxNumber - this.minNumber)) + this.minNumber;

    if (number === actualNumber) {
      var payoutAmount = this.payout(bet);
      console.log("You win $" + payoutAmount + ", the spin was " + actualNumber + "!!!");

      this.bankrollAmount += payoutAmount;
      this.bankroll();
    } else {
      console.log("You lose, the spin was " + actualNumber + ". :(");
      this.bankrollAmount -= bet
      this.bankroll();
    }
  };

  this.buyIn = function(amount){
    console.log("You bought in $" + amount);
    this.bankrollAmount += amount;
    this.bankroll();
  };

  this.bankroll = function(){
    console.log("You now have $" + this.bankrollAmount);
  }

  this.payout = function(bet) {
    return (this.maxNumber - this.minNumber) * bet
  }
}



var r = new Roulette( 100 )  // starting bankroll $100
r.spin( 10, 24 )         // bet 10 on 24
// You Win $350, the spin was 24!!!
// You now have $440.
r.spin( 50, 13 )
// You Lose, the spin was 11 :(
// You now have $390
r.bankroll()
// You now have $390
r.buyIn( 1000 )
// You bought in $1000
// You now have $1390