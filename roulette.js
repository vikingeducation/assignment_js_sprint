function Roulette(num){

  this.bank = num;

  this.spin = function(betAmount, betTarget) {
    if (betAmount > this.bank) {
      console.log("You do not have " + betAmount + " to wager. You have " + this.bank);
    }
    var topNum = 36;
    var winNumber = Math.floor( Math.random() * topNum);
    if (betTarget == winNumber){
      var winnings = (betAmount * 35);
      this.bank += winnings;
      console.log("You win " + winnings + ", the spin was " + winNumber + "!!!");
      console.log("You now have " + this.bank);
      } else {
      this.bank -= betAmount;
      console.log("You lost, the spin was " + winNumber + " sad face");
      console.log("You now have " + this.bank);
    }
  };

  this.bankroll = function(){
    console.log("You have " + this.bank);
  };

  this.buyIn = function(num){
    console.log("You bought in " + num);
    this.bank += num;
    console.log("You have " + this.bank);
  };
}
