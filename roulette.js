function Roulette(bankroll) {
  this.bankrollValue = bankroll;

  this.calculatePayout = function(betName, betInDollars) {
    const standardPayout = 35;

    switch(betName) {
      case "0":
      case "00":
        return betInDollars * standardPayout;
      case "Even":
      case "Odd":
      case "1 to 18":
      case "19 to 36":
        return betInDollars;
      case "1st 12":
      case "2nd 12":
      case "3rd 12":
        return betInDollars * 2;
      default:
        return betInDollars * standardPayout;
    }
  };

  this.hasSpinWon = function(betName, spinResult) {
    switch(betName) {
      case "0":
        if(spinResult === 0)
          return true;
        break;
      case "00":
        if(spinResult === 37)
          return true;
        break;
      case "Even":
        if(spinResult % 2 === 0)
          return true;
        break;
      case "Odd":
        if(spinResult % 2 === 1)
          return true;
        break;
      case "1 to 18":
        if(spinResult >= 1 && spinResult <= 18)
          return true;
        break;
      case "19 to 36":
        if(spinResult >= 19 && spinResult <= 36)
          return true;
        break;
      case "1st 12":
        if(spinResult >= 1 && spinResult <= 12)
          return true;
        break;
      case "2nd 12":
        if(spinResult >= 13 && spinResult <= 24)
          return true;
        break;
      case "3rd 12":
        if(spinResult >= 25 && spinResult <= 36)
          return true;
        break;
      default:
        if(spinResult === betName)
          return true;
    }
    return false;
  };

  this.spin = function(betInDollars, betName)
  {
    const minSpinResult = 0;
    const maxSpinResult = 37;  // 37 is for bet name of '00'

    // get a random integer between the min and max spin results, inclusive
    var spinResult = Math.floor(Math.random() * (maxSpinResult - minSpinResult + 1)) + minSpinResult;

    if (this.hasSpinWon(betName, spinResult)) {
      var winnings = this.calculatePayout(betName, betInDollars);
      this.bankrollValue += winnings;
      console.log("You win $" + winnings + ", the spin was " + spinResult);
    }
    else {
      this.bankrollValue -= betInDollars;
      console.log("You lose, the spin was " + spinResult);
    }
    console.log("You now have $" + this.bankrollValue);
  };

  this.bankroll = function()
  {
    console.log("You now have " + this.bankrollValue);
  };

  this.buyIn = function(buyInDollars)
  {
    this.bankrollValue += buyInDollars;
    console.log("You bought in " + buyInDollars);
    console.log("You now have " + this.bankrollValue);
  };
}



