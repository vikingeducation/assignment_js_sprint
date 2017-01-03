function Roulette(startingAmount) {
  this.bankrollAmount = startingAmount;

  this.bankroll = function() {
    console.log("You now have $" + this.bankrollAmount);
  };

  this.buyIn = function(amount) {
    this.bankrollAmount += amount;
  };

  this.spin = function(bet, input) {
    var spinResult = Math.floor(Math.random() * 35) + 1

    var multiplier,
        match;
    switch( input ){
      case "0":
        multiplier = 35;
        match = [0];
        break;
      case "00":
        multiplier = 35;
        match = [37];
        break;
      case "1 to 18":
        multiplier = 1;
        match = this.arrayBuilder(1,18);
        break;
      case "19 to 36":
        multiplier = 1;
        break;
      case "Even":
        multiplier = 1;
        break;
      case "Odd":
        multiplier = 1;
        break;
      case "1st 12":
        multiplier = 2;
        break;
      case "2nd 12":
        multiplier = 2;
        break;
      case "3rd 12":
        multiplier = 2;
        break;
      default:
        multiplier = 35;
    }
    if (input === spinResult) {
      payoutAmnt = this.payout(bet, input)
      this.result( payoutAmnt, spinResult, "win");
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
