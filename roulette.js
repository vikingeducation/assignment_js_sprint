function Roulette(bankrollStart, houseOdds) {
  this.money = bankrollStart;

  this.wheel = [0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1,"00",27,
    10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2];

  this.odds = {
    "Even": 1,
    "Odd": 1,
    "1 to 18": 1,
    "19 to 36": 1,
    "1st 12": 2,
    "2nd 12": 2,
    "3rd 12": 2
  };

  this.getOdds = function(betSpace) {
    var wheelIndex = this.wheel.indexOf(betSpace), betOdds;
    if (wheelIndex > -1) {
      betOdds = 36;
    } else if (Object.keys(this.odds).indexOf(betSpace) > -1 ) {
      betOdds = this.odds[betSpace];
    } else {
      return false;
    }
    return betOdds;
  };

  this.isWinner = function(betSpace, computerSpace) {
    if (betSpace == computerSpace) {
      return true;
    } else if (betSpace === "Even" && computerSpace % 2 === 0) {
      return true;
    } else if (betSpace === "Odd" && computerSpace % 2 !== 0) {
      return true;
    } else if (betSpace === "1 to 18" && computerSpace >= 1 && computerSpace <= 18 ) {
      return true;
    } else if (betSpace === "19 to 36" && computerSpace >= 19 && computerSpace <= 36) {
      return true;
    } else if (betSpace === "1st 12" && computerSpace >= 1 && computerSpace <= 12) {
      return true;
    } else if (betSpace === "2nd 12" && computerSpace >= 13 && computerSpace <= 24) {
      return true;
    } else if (betSpace === "3rd 12" && computerSpace >= 25 && computerSpace <= 36) {
      return true;
    } else {
      return false;
    }
  };

  this.spin = function(betAmount, betSpace) {
    var odds = this.getOdds(betSpace);
    if (odds === false) {
      console.error("Not a valid bet space.");
      return false;
    }
    var randomIndex = Math.floor(Math.random() * this.wheel.length);
    var computerSpace = String(this.wheel[randomIndex]);
    console.log("The spin was " + computerSpace);
    if (this.isWinner(betSpace, computerSpace)) {
      this.payout(odds, betAmount);
    } else {
      this.loss(betAmount);
    }
    this.bankroll();
  };

  this.payout = function(betOdds, betAmount) {
    var winnings = betAmount * betOdds; // if 35:1, odds is 35
    this.money += winnings;
    console.log("You win $" + winnings);
  };

  this.loss = function(betAmount) {
    this.money -= betAmount;
    console.log("You lose $" + betAmount);
  };

  this.bankroll = function() {
    console.log("You now have $" + this.money);
  };

  this.buyIn = function(amount) {
    this.money += amount;
  };
}

r = new Roulette(1000, 1);
