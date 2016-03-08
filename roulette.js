function Roulette( startingBank ) {
  // Player's bank
  this.bank = startingBank;
  // Setup roulette wheel
  this.wheel = [0, "00"];
  // Bet Types
  this.doubleZero = "00";
  this.even = [];
  this.odd = [];
  this.firstHalf = [];
  this.secondHalf = [];
  this.firstThird = [];
  this.secondThird = [];
  this.thirdThird = [];
  // Fill bet number arrays
  for (var i = 1; i <= 36; i++) {
    this.wheel.push(i);
    i % 2 === 0 ? this.even.push(i) : this.odd.push(i);
    i / 2 <= 0.5 ? this.firstHalf.push(i) : this.secondHalf.push(i);
    if (i <= 12) {
      this.firstThird.push(i);
    } else if (i <= 24) {
      this.secondThird.push(i);
    } else {
      this.thirdThird.push(i);
    }
  }
  // Welcome screen and instructions for playing



  // Display's current bank
  this.bankroll = function() {
    console.log("You now have $" + this.bank);
  };

  // Add's money to bank
  this.buyIn = function(money) {
    this.bank += money;
    console.log("You bought in $" + money);
    this.bankroll();
  };

  // Spins the roulette
  this.spin = function(betType, betAmount) {
    if (this.validateSpin(betType, betAmount)) {
      this.processSpin(betType, betAmount);
    }
  };

  // Checks for valid user input
  this.validateSpin = function(betType, betAmount) {
    if (betAmount > this.bank) {
      console.log("You don't have enough money.")
      this.bankroll();
      return false;
    } else if (betType < 1 || betType > 36) {
      var types = ["doubleZero", "even", "odd", "firstHalf", "secondHalf", "firstThird", "secondThird", "thirdThird"];
        if (types.indexOf(types) > -1) {
          console.log("Valid bets are as follows:");
          console.log("Any integer between 0 and 36");
          console.log("doubleZero");
          console.log("even");
          console.log("odd");
          console.log("firstHalf");
          console.log("secondHalf");
          console.log("firstThird");
          console.log("secondThird");
          console.log("thirdThird");
          return false;
      }
    }
    return true;
  };

  // Logic to process spin
  this.processSpin = function(betType, betAmount) {
    var randomIndex = Math.floor(Math.random() * this.wheel.length);
    var spinNumber = this.wheel[randomIndex];
    //var spinNumber = "00";
    if ( (typeof betType === "string" && this[String(betType)] === spinNumber) || betType === spinNumber ) {
      winning = betAmount * this.payRatio(betType);
      this.bank += winning;
      console.log("You win $" + winning + ", the spin was " + spinNumber);
      this.bankroll();
    } else {
      this.bank -= betAmount;
      console.log("You lose, the spin was " + spinNumber);
      this.bankroll();
    }
  };

  // Returns the payout ratio depending on betType
  this.payRatio = function(betType) {
    // var one = ["even", "odd", "firstHalf", "secondHalf"];
    // var two = ["firstThird", "secondThird", "thirdThird"];
    // if (one.indexOf(betType) > -1) {
    //   return 1;
    // } else if (two.indexOf(betType) > -1) {
    //   return 2;
    // } else {
    //   return 35;
    // }

    var payRatios = {
      even: 1,
      odd: 1,
      firstHalf: 1,
      secondHalf: 1,
      firstThird: 2,
      secondThird: 2,
      thirdThird: 2
    };
    return payRatios[betType.toString()] || 35;
  };
}
