function Roulette(bank) {

  var balance = bank;
  var choices = {
    "even": function(bet, num) {
      if (num % 2 === 0) {
        balance += bet;
        console.log("You win! The number was" + num);
      } else {
        balance -= bet;
        console.log("You lost... The number was" + num);
      }
    }

    "odd": function(bet, num) {
      if (num % 2 === 0) {
        balance -= bet;
        console.log("You lost.. The number was" + num);
      } else {
        balance += bet;
        console.log("You win! The number was" + num);
      }
    }

    "1 to 18": function(bet, num) {
      if (num < 19) {
        balance += bet;
        console.log("You win! The number was" + num);
      } else {
        balance -= bet;
        console.log("You lost.. The number was" + num);
      }
    }

    "19 to 36": function(bet, num) {
      if (num < )
    }
  }


  this.bankroll = function() {
    return balance;
  };

  this.spin = function(bet, spot) {
    var num = Math.floor(Math.random() * 38);
    spot = spot.toLowerCase();
    choices[spot](bet, num);

    // if (Number(spot) === num) {
    //   balance += bet * 35;
    //   console.log("You win! it was a " + num);
    // } else {
    //   if (spot === "00" && num === 37) {
    //     balance += bet * 35;
    //     console.log("You win! it was a " + num);
    //   } else {
    //     balance -= bet;
    //     console.log("You lose... it was a " + num);
    //   }
    // }
    console.log("You now have " + balance);
  };

  this.buyIn = function(val) {
    console.log("Recalculating balance...");
    balance += val;
    console.log("You now have " + balance);
  };

};

r = new Roulette(100);
r.spin(50,20);
r.buyIn(100);
