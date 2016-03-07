

  function Roulette( startingBank ) {
    this.bank = startingBank;

    this.spin = function(number, bet) {
      if (bet > this.bank) {
        this.bankroll();
        console.log("Enter a bet that is proper, or buy in!");
      } else if ( number <= 36 && number >= 1 ) {
        spinNumber = Math.floor(Math.random() * 35 + 1);
        if (number === spinNumber) {
          winning = bet * 35;
          this.bank += winning;
          console.log("You win $" + winning + ", the spin was " + spinNumber);
          this.bankroll();

        } else {
          this.bank -= bet;
          console.log("You lose, the spin was " + spinNumber);
          this.bankroll();
        }
      } else {
        console.log("Enter a valid number between 1 and 36, inclusive");
      }
    };

    this.bankroll = function() {
      console.log("You now have $" + this.bank);
    };

    this.buyIn = function(money) {
      this.bank += money;
      console.log("You bought in $" + money);
      this.bankroll();
    };
  }



// $(document).ready( function(){ rouletteGame });
