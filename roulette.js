function Roulette(startingAmount) {
  (function() {
    console.log("Welcome to Roulette!");
    console.log("Check your bankroll with .bankroll()");
    console.log("Add money to your bankroll with .buyIn( amountToAdd ) ");
    console.log("Enter a bet and spin the wheel using .spin(betAmount, 'betNumber')");
    console.log(`betNumber options and their payouts are:
                  Any number 1-36 (35:1), "0" (35:1), "00" (35:1), "Even" (1:1),
                  "Odd" (1:1), "1 to 18" (1:1), "19 to 36" (1:1),
                  "1st 12" (2:1), "2nd 12" (2:1), or "3rd 12" (2:1)`);
  })();

  this.bankrollAmount = startingAmount;

  this.bankroll = function() {
    console.log("You now have $" + this.bankrollAmount);
  };

  this.buyIn = function(amount) {
    this.bankrollAmount += amount;
  };

  this.arrayBuilder = function(start, stop, by) {
    matchArr = [];
    for (var i = start; i <= stop; i += by) {
      matchArr.push(i);
    }

    return matchArr;
  };

  this.setGameConditions = function(input) {
    var multiplier,
        match;
    switch( input ){
      case "0":
        multiplier = 35;
        match = [0];
        break;
      case "00":
        multiplier = 35;
        match = [37, "00"];
        break;
      case "1 to 18":
        multiplier = 1;
        match = this.arrayBuilder(1,18,1);
        break;
      case "19 to 36":
        multiplier = 1;
        match = this.arrayBuilder(19,36,1);
        break;
      case "Even":
        multiplier = 1;
        match = this.arrayBuilder(2,36,2);
        break;
      case "Odd":
        multiplier = 1;
        match = this.arrayBuilder(1,36,2);
        break;
      case "1st 12":
        multiplier = 2;
        match = this.arrayBuilder(1,12,1);
        break;
      case "2nd 12":
        multiplier = 2;
        match = this.arrayBuilder(13,24,1);
        break;
      case "3rd 12":
        multiplier = 2;
        match = this.arrayBuilder(25,36,1);
        break;
      default:
        multiplier = 35;
        match = [parseInt(input)];
    }
    return [match, multiplier];
  };

  this.spin = function(bet, input) {
    var spinResult = Math.floor(Math.random() * 36) + 1,
        gameConditions = this.setGameConditions(input);
    if (gameConditions[0].indexOf(spinResult) >= 0) {
      if (spinResult === 37) spinResult = "00";
      this.result(bet*gameConditions[1], spinResult, "win");
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
