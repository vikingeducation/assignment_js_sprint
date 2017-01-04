function Roulette(num){

  this.bank = num;

  this.odds = function(betTarget) {
    switch (betTarget) {
      case "even":
        return 1;
      case "odd":
        return 1;
      case "first half":
        return 1;
      case "second half":
        return 1;
      case "first third":
        return 2;
      case "middle third":
        return 2;
      case "last third":
        return 2;
    }
  };

  this.checkBet = function(betAmount) {
    if (betAmount > this.bank) {
      console.log("You do not have " + betAmount + " to wager. You have " + this.bank);
      return false
    }
    return true
  };

  this.getWinNumber = function() {
    // a top number of 38 to account for 36 spaces, -1 that adds '0', and '00' = 37
    var topNum = 38;
    return Math.floor( (Math.random() * topNum) - 1);
  };

  this.isWinner = function(betTarget, winNumber) {
    if (betTarget == winNumber) {
      return true;
    } else if (betTarget === "00" && winNumber == 37) {
      return true;
    } else if (betTarget === "even" && winNumber % 2 === 0) {
      return true;
    } else if (betTarget === "odd" && winNumber % 2 !== 0) {
      return true;
    } else if (betTarget === "first half" && winNumber >= 1 && winNumber <= 18 ) {
      return true;
    } else if (betTarget === "second half" && winNumber >= 19 && winNumber <= 36) {
      return true;
    } else if (betTarget === "first third" && winNumber >= 1 && winNumber <= 12) {
      return true;
    } else if (betTarget === "middle third" && winNumber >= 13 && winNumber <= 24) {
      return true;
    } else if (betTarget === "last third" && winNumber >= 25 && winNumber <= 36) {
      return true;
    } else {
      return false;
    }
  };

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  this.payout = function(betTarget, betAmount) {
    var numberBetOdds = 35
    if (isNumeric(betTarget)) {
      var winnings = (betAmount * numberBetOdds);
    } else {
      var odds = this.odds(betTarget);
      var winnings = (betAmount * odds);
    }
    this.bank += winnings;
    console.log("You win " + winnings + ", the spin was " + betTarget + "!!!");
    console.log("You now have " + this.bank);
  };

  this.loss = function(betAmount, winNumber) {
    this.bank -= betAmount;
    console.log("You lost, the spin was " + winNumber + " sad face");
    console.log("You now have " + this.bank);
  };

  this.spin = function(betAmount, betTarget) {
    if (!this.checkBet(betAmount)) { return false;}
    var winNumber = this.getWinNumber();
    if (this.isWinner(betTarget, winNumber)) {
      this.payout(betTarget, betAmount);
    } else {
      this.loss(betAmount, winNumber);
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

r = new Roulette(1000);
r.spin(10,1);
r.spin(1, "even");
r.spin(3000, "odd");
r.spin(2, "first half");
r.spin(2, "middle third");
