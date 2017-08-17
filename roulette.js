var Roulette = function(roll) {
  this.roll = roll;
  // Displays current bankroll
  this.bankroll = function() {
    return "You now have $" + this.roll;
  }
  // Adds buyin amount to bankroll
  this.buyIn = function(buyin) {
    this.roll += buyin;
    console.log("You bought in $" + buyin + "\n You now have $" + this.roll);
  }
  // Place bet and spin the wheel
  this.spin = function(bet, betType) {
    // Check for illegal bet size
    if (bet > this.roll) {
      console.log("Please place a bet within your bankroll!");
      console.log("You now have $" + this.roll);
    } else {
      // Random number between 0 and 37. 37 == "00"
      var winningNumber = Math.floor(Math.random() * 38);
      // Player bets on number between 0 and 36
      if (typeof betType == "number") {
        if (betType > 36) {
          console.log('You can only bet on numbers between 0 and 36. Choose "00" to bet on 00')
        } else if (winningNumber == betType) {
          Roulette.call(this.roll += (bet*35));
          console.log("You win $" + bet*35 + ", the spin was " + winningNumber + "!!!");
          console.log("You now have $" + this.roll);
        } else {
          Roulette.call(this.roll -= bet);
          console.log("You lose, the spin was " + winningNumber + " :(");
          console.log("You now have $" + this.roll);
        }
      } else if (typeof betType == "string") {
        // Player bets on "00" or special bets
        betType = betType.toLowerCase();
        switch(betType) {
          case "00":
            if (winningNumber == 37) {
              Roulette.call(this.roll += (bet*35));
              console.log("You win $" + bet*35 + ", the spin was 00!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "even":
            if (winningNumber % 2 === 0) {
              Roulette.call(this.roll += (bet));
              console.log("You win $" + bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "odd":
            if (!(winningNumber % 2 === 0)) {
              Roulette.call(this.roll += (bet));
              console.log("You win $" + bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "1 to 18":
            if ((winningNumber > 0) && (winningNumber < 19)) {
              Roulette.call(this.roll += (bet));
              console.log("You win $" + bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "19 to 36":
            if (winningNumber > 18) {
              Roulette.call(this.roll += (bet));
              console.log("You win $" + bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "1st 12":
            if ((winningNumber > 0) && (winningNumber < 13)) {
              Roulette.call(this.roll += (2*bet));
              console.log("You win $" + 2*bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "2nd 12":
            if ((winningNumber > 12) && (winningNumber < 25)) {
              Roulette.call(this.roll += (2*bet));
              console.log("You win $" + 2*bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          case "3rd 12":
            if (winningNumber > 24) {
              Roulette.call(this.roll += (2*bet));
              console.log("You win $" + 2*bet + ", the spin was " + winningNumber + "!!!");
              console.log("You now have $" + this.roll);
            } else {
              Roulette.call(this.roll -= bet);
              console.log("You lose, the spin was " + winningNumber + " :(");
              console.log("You now have $" + this.roll);
            }
            break;
          default:
            console.log("Please choose a valid bet type");
        }
      }
    }
  }
};
