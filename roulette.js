

  function Roulette( startingBank ) {
    // Player's bank
    this.bank = startingBank;
    // Setup roulette wheel
    this.wheel = ["0", "00"];
    // Bet Types
    this.zero = this.wheel[0];
    this.doubleZero = this.wheel[1];
    this.even = [];
    this.odd = [];
    this.firstHalf = [];
    this.secondHalf = [];
    this.firstThird = [];
    this.secondThird = [];
    this.thirdThird = [];
    // Fill bet number arrays
    for (var i = 1; i <= 36, i++) {
      this.wheel.push(i);
      i % 2 === 0 ? this.even.push(i) : this.odd.push(i);
      i / 2 <= 0.5 ? this.firstHalf.push(i) : this.secondHalf.push(i);
      if (i <= 12) {
        this.firstThird.push(i);
      } else if (i <= 24){
        this.secondThird.push(i);
      } else {
        this.thirdThird.push(i);
      }
    }

    // Display's current bank
    this.bankroll = function() {
      console.log("You now have $" + this.bank);
    };

    // Add's money to bank
    this.buyIn = function(money) {
      this.bank += money;
      console.log("You bought in $" + money);
      this.bankroll();
    };

    // Spins the roulette
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

  }



// $(document).ready( function(){ rouletteGame });
