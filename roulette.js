//Build a Roulette game using basic object-oriented programming principles in JavaScript. The user should start with a bankroll and bet with each "spin" of the imaginary wheel. They can choose numbers 1-36. After each spin, the result is displayed and funds are distributed accordingly (payout is 35:1). Gameplay might look something like:
// Add the ability for users of your Roulette game to bet on "0" (35:1), "00" (35:1), "Even" (1:1), "Odd" (1:1), "1 to 18" (1:1), "19 to 36" (1:1), "1st 12" (2:1), "2nd 12" (2:1), or "3rd 12" (2:1).


function Roulette(bankroll) {
  this.bankroll = bankroll;
  this.spin = function(bet, choice) {
    this.bankroll -= bet
    var spinResult = Math.floor((Math.random()* 38));
    switch(choice) {
      case("00"):
        if (spinResult === 37) {
          this.bankroll += bet * 36
          console.log("You win! You now have " + this.bankoll)
          break;
        }
        else {
          console.log("You win! You now have " + this.bankoll)
          break;
        }
      case("Even"):
        if (spinResult % 2 === 0) {
          this.bankroll += bet * 2
          console.log("You win! You now have " + this.bankoll)
          break;
        }
        else {
          console.log("You win! You now have " + this.bankoll)
          break;
        }
    }
  }
}

var game = new Roulette();
game.spin(10, "0");
