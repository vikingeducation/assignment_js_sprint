// Build a Roulette game using basic object-oriented programming principles in JavaScript. The user should start with a bankroll and bet with each "spin" of the imaginary wheel. They can choose numbers 1-36. After each spin, the result is displayed and funds are distributed accordingly (payout is 35:1).

// Add the ability for users of your Roulette game to bet on "0" (35:1), "00" (35:1), "Even" (1:1), "Odd" (1:1), "1 to 18" (1:1), "19 to 36" (1:1), "1st 12" (2:1), "2nd 12" (2:1), or "3rd 12" (2:1).

function Roulette( startingBankroll ) {
  this.balance = startingBankroll;
  this.spin = function( bet, number ) {
    if ( bet <= this.balance ) {
      this.balance -= bet;
      var result = Math.floor( Math.random() * 37 + 1 );
      if ( number === result ) {
        var winnings = bet * 35;
        this.balance += winnings;
        var message = "You win " + winnings + ", the spin was " + result + "!!!";
      } else {
        var message = "You lose! The spin was " + result;
      }

      message += "\nYou now have " + this.balance;

      console.log( message );
    } else {
      console.log( "You can't bet more than you have!" );
    }
  };

  this.parseInput = function( input ) {
    if (typeof(input) == "string") {

    }
  }

  this.bankroll = function() {
    console.log( this.balance );
  };

  this.buyIn = function( amount ) {
    this.balance += amount;
  }
}
