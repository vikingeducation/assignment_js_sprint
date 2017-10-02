function Roulette(initialAmount) {
  this.bankAmount = initialAmount;

  this.bankroll = function () {
    console.log("You now have $" + this.bankAmount);
  };

  this.getPocket = function () {
    this.pocket = Math.round(Math.random()*37);
    if(this.pocket == 37)
      this.pocket = "00";
  };

  this.lose = function (amount) {
    this.bankAmount -= amount;
    console.log("You Lose, the spin was " + this.pocket + ".");
    console.log("You now have $" + this.bankAmount);
  };

  this.win = function (amount, multiplier) {
    this.payout = amount * multiplier;
    this.bankAmount += this.payout;
    console.log("You Win $" + this.payout +", the spin was " + this.pocket + "!!!");
    console.log("You now have $" + this.bankAmount);
  };

  this.spin = function (amount, bet) {
    if(amount > this.bankAmount) {
      console.log("You don't have sufficient balance.");
    }
    else {
      this.payout = 0;
      this.getPocket();

      switch(bet){
        case "Even":
          if (this.pocket % 2 === 0 && this.pocket > 0)
            this.win(amount, 1);
          break;

        case "Odd":
          if (this.pocket % 2 !== 0)
            this.win(amount, 1);
          break;

        case "1 to 18":
          if (this.pocket >= 1 && this.pocket <= 18)
            this.win(amount, 1);
          break;

        case "19 to 36":
          if (this.pocket >= 19 && this.pocket <= 36)
            this.win(amount, 1);
          break;

        case "1st 12":
          if (this.pocket >= 1 && this.pocket <= 12)
            this.win(amount, 2);
          break;

        case "2nd 12":
          if (this.pocket >= 13 && this.pocket <= 24)
            this.win(amount, 2);
          break;

        case "3rd 12":
          if (this.pocket >= 25 && this.pocket <= 36)
            this.win(amount, 2);
          break;

        default:
          if(bet === this.pocket)
            this.win(amount, 35);
      }
      if (this.payout == 0)
        this.lose(amount);
    }
  };

  this.buyIn = function (amount) {
    console.log("You bought in $" + amount);
    this.bankAmount += amount;
    console.log("You now have $" + this.bankAmount);
  };
}
