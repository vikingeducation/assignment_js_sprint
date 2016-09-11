function Roulette(bankroll){

  this.bankroll = bankroll;

  this.spin = function(bet, guess){
    var spin = getRandomInt(0, 37);

    if(guess === spin){
      this.bankroll += payout(bet);

      console.log("You win $" + payout(bet) + ", the spin was " + spin + "!!!");
      console.log("You now have $" + this.bankroll);
    } else {
      this.bankroll -= bet;
      console.log("You lose, the spin was " + spin)
    };
  };


  this.buyIn = function(amount){
    this.bankroll += amount;
    console.log("You bought in $" + amount);
    console.log("You now have $" + this.bankroll)
  };

  var payout = function(bet){
    return 35 * bet;
  };

};



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}