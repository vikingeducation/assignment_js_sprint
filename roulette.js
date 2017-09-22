function Roulette(bankroll) {
  this.balance = bankroll;

  this.spin = function(betAmount, num) {
    if (num === "00") { num = 37 };
    var winningNum = Math.floor(Math.random() * 38);
    var multiplier = payout(num);
    if (isWinner(num, winningNum)) {
      var winAmount = betAmount * multiplier;
      this.balance += winAmount;
      console.log("You win " + "$" + winAmount + ", " + "the spin was " + winningNum + ".");
      console.log("You now have " + "$" + this.balance + ".");
    } else {
      this.balance -= betAmount;
      console.log("You lose, the spin was " + winningNum + ":(");
      console.log("You now have " + "$" + this.balance + ".");
    }
  };

  this.bankroll = function() {
    console.log("You now have " + "$" + this.balance);    
  };

  this.buyIn = function(amount) {
    this.balance += amount;
    console.log("You bought in with " + "$" + amount);
    console.log("You now have " + "$" + this.balance);
  };

  var payout = function(num) {
    switch(num) {
     case "even":
     case "odd": 
     case "1 to 18": 
     case "19 to 36":
       return 1;
       break;
     case "1st 12":
     case "2nd 12":
     case "3rd 12":
       return 2;
       break;
     default: 
       return 35;  
   }
 };

  var isWinner = function(num, winningNum) {
    switch(num) {
      case "even":
        if (winningNum !== 0 && winningNum % 2 === 0) { return true };
        break;
      case "odd":
        if (winningNum !== 37 && winningNum % 2 !== 0) { return true };
        break;
      case "1 to 18":
        if (winningNum >= 1 && winningNum <= 18) { return true };
        break;
      case "19 to 36":
        if (winningNum >= 19 && winningNum <= 36) { return true };
        break;
      case "1st 12":
        if (winningNum >= 1 && winningNum <= 12) { return true };
        break;
      case "2nd 12":
        if (winningNum >= 13 && winningNum <= 24) { return true };
        break;
      case "3rd 12":
        if (winningNum >= 25 && winningNum <= 36) { return true };
        break;
       default:
        if (winningNum === num) { return true };   
    }
    return false;     
  };
}



