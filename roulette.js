/* This is a Roulette game. It has basic spin gameplay and does not handle:
1) bankrupsy
2) user input on whether to spin again
3) true odds of spinning an "even", or "black", etc.
*/

function Game(bankroll){
  this.bankroll = bankroll;
  console.log("Welcome! You're starting off with $"+this.bankroll);

  var stringOptions = ["0", "00", "Even", "Odd", "1 to 18", "19 to 36", "1st 12", "2nd 12", "3rd 12"];
  var numberOptions = [];
  for (var i = 1; i <= 36; i++) {
    numberOptions.push(i);
  }
  this.wheelOptions = stringOptions.concat(numberOptions);

  this.calculatePayout = function(betAmt, betNumber){
    var result = 0;
    if(numberOptions.includes(betNumber)){
      return betAmt * 35;
    } else {
      switch(betNumber){
      case "0": result = betAmt * 35; break;
      case "00": result = betAmt * 35; break;
      case "Even": result = betAmt * 1; break;
      case "Odd": result = betAmt * 1; break;
      case "1 to 18": result = betAmt * 1; break;
      case "19 to 36": result = betAmt * 1; break;
      case "1st 12": result = betAmt * 2; break;
      case "2nd 12": result = betAmt * 2; break;
      case "3rd 12": result = betAmt * 2; break;
      }
      return result;
    }
  };

  this.distributeWinnings = function(betAmt, betNumber){
    var payout = this.calculatePayout(betAmt, betNumber);
    console.log("You win $" + payout);
    this.bankroll += payout;
    console.log("You now have $"+ this.bankroll);
  };

  this.deductLoss = function(betAmt){
    console.log("You lost $" + betAmt);
    this.bankroll -= betAmt;
    console.log("You now have $"+ this.bankroll);
  };

  this.spin = function(betAmt, betNumber){
    console.log("New spin...");
    var rolledNumber = this.wheelOptions[Math.floor(Math.random() * this.wheelOptions.length)];
    console.log("You bet on "+betNumber+" and rolled a "+rolledNumber);
    if(rolledNumber == betNumber){
      this.distributeWinnings(betAmt, betNumber);
    }else{
      this.deductLoss(betAmt, betNumber);
    }
  };

}

var game = new Game(100);
game.spin(10, 28);
game.spin(10, "Even");
