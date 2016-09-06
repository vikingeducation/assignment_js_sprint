//Build a Roulette game using basic object-oriented programming principles in JavaScript. The user should start with a bankroll and bet with each "spin" of the imaginary wheel. They can choose numbers 1-36. After each spin, the result is displayed and funds are distributed accordingly (payout is 35:1). Gameplay might look something like:
// Add the ability for users of your Roulette game to bet on "0" (35:1), "00" (35:1), "Even" (1:1), "Odd" (1:1), "1 to 18" (1:1), "19 to 36" (1:1), "1st 12" (2:1), "2nd 12" (2:1), or "3rd 12" (2:1).


function Roulette(bankroll) {
  this.bankroll = bankroll;
  this.spin = function(bet, choice) {
    if (bet > this.bankroll) {
      return console.log("You don't have enough money to make that bet. Your bankroll is " + this.bankroll);
    }
    this.bankroll -= bet
    var spinResult = Math.floor((Math.random()* 38));
    switch(choice) {
      case("00"):
        if (spinResult === 37) {
          spinResult = "00";
          this.bankroll += bet * 36;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("Even"):
        if (spinResult % 2 === 0) {
          this.bankroll += bet * 2;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("Odd"):
        if (spinResult % 2 !== 0) {
          this.bankroll += bet * 2;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("1 to 18"):
        if (spinResult > 0 && spinResult < 19) {
          this.bankroll += bet * 2;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("19 to 36"):
        if (spinResult > 18 && spinResult < 37) {
          this.bankroll += bet * 2;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("1st 12"):
        if (spinResult > 0 && spinResult < 13) {
          this.bankroll += bet * 3;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("2nd 12"):
        if (spinResult > 12 && spinResult < 25) {
          this.bankroll += bet * 3;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      case("3rd 12"):
        if (spinResult > 25 && spinResult < 37) {
          this.bankroll += bet * 3;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
      default:
        if (choice == spinResult) {
          this.bankroll += bet * 36;
          console.log("The spin was " + spinResult);
          console.log("You win! You now have " + this.bankroll);
          break;
        }
        else {
          console.log("The spin was " + spinResult);
          console.log("You lose! You now have " + this.bankroll);
          break;
        }
    }
  }
}

var game = new Roulette();
game.spin(10, "0");
