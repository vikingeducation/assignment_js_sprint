Roulette = function(startingBank) {
  this.bank = startingBank;

  this.bankRoll = function() {
    console.log("You now have $" + this.bank);
  };

  this.buyIn = function(amount) {
    this.bank += amount;
    console.log("You bought in $" + amount);
    console.log("You now have $" + this.bank);
  };

  this.spin = function(betAmount, betOn) {
    if (this.bank - betAmount < 0) {
      console.log("You can't bet that much, try buyIn($amount)");
      this.bankRoll();
      return;
    }

    wheel = Math.floor(Math.random() * (39 - 1)) + 1;
    
    if (wheel === 38) {
      wheel = "00";
    } else if (wheel === 37 ) {
      wheel = 0;
    }

    if (betOn == "1 to 18" && this.between(wheel, 1, 18)) {
      this.payOut(1, betAmount, wheel);
    } else if ( betOn == "19 to 36" && this.between(wheel, 19, 36) ) {
      this.payOut(1, betAmount, wheel);
    } else if ( betOn == "1st 12" && this.between(wheel, 1, 12) ) {
      this.payOut(2, betAmount, wheel);
    } else if ( betOn == "2nd 12" && this.between(wheel, 12, 24) ) {
      this.payOut(2, betAmount, wheel);
    } else if ( betOn == "3rd 12" && this.between(wheel, 24, 36) ) {
      this.payOut(2, betAmount, wheel); 
    } else if ( betOn == "Even" && wheel % 2 === 0 ) {
      this.payOut(1, betAmount, wheel); 
    } else if ( betOn == "Odd" && !(wheel % 2 === 0) ) {
      this.payOut(1, betAmount, wheel); 
    } else if (betOn === wheel) {
      this.payOut(35, betAmount, wheel)
    } else {
      this.bank -= betAmount;
      console.log("You lose, the spin was " + wheel);
    }
    this.bankRoll();
  };

  this.payOut = function(multiplier, betAmount, wheel) {
    payout = betAmount * multiplier;
    this.bank += payout
    console.log("You win $" + payout + ", the spin was " + wheel);
  };

  this.between = function(x, min, max) {
    return x >= min && x <= max;
  };

};