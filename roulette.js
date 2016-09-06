function Roulette(bank) {

  var balance = bank;
  var choices = {
    even: function(bet, num) {
      if (num % 2 === 0) {
        balance += bet;
        console.log("You win! The number was " + num);
      } else {
        balance -= bet;
        console.log("You lost... The number was " + num);
      }
    },

    odd: function(bet, num) {
      if (num % 2 === 0) {
        balance -= bet;
        console.log("You lost.. The number was " + num);
      } else {
        balance += bet;
        console.log("You win! The number was " + num);
      }
    },

    "1 to 18": function(bet, num) {
      if (num < 19) {
        balance += bet;
        console.log("You win! The number was " + num);
      } else {
        balance -= bet;
        console.log("You lost.. The number was " + num);
      }
    },

    "19 to 36": function(bet, num) {
      if (num > 18 && num < 37){
        balance += bet;
        console.log("You win! The number was " + num);
      } else {
        balance -= bet;
        console.log("You lost.. The number was " + num);
      }
    },

    "first 12": function(bet, num) {
      if (num < 13){
        balance += bet * 2;
        console.log("You win! The number was " + num);
      } else {
        balance -= bet;
        console.log("You lost.. The number was " + num);
      }
    },

    "second 12": function(bet, num) {
      if (num > 12 && num < 25){
        balance += bet * 2;
        console.log("You win! The number was " + num);
      } else {
        balance -= bet;
        console.log("You lost.. The number was " + num);
      }
    },

    "third 12": function(bet, num) {
      if (num > 24 && num < 37){
        balance += bet * 2;
        console.log("You win! The number was " + num);
      } else {
        balance -= bet;
        console.log("You lost.. The number was " + num);
      }
    },

    single: function(bet, num, spot) {
      if (Number(spot) === num) {
        balance += bet * 35;
        console.log("You win! it was a " + num);
      } else {
        if (spot === "00" && num === 37) {
          balance += bet * 35;
          console.log("You win! it was a " + num);
        } else {
          balance -= bet;
          console.log("You lose... it was a " + num);
        }
      }
    }

  };



  this.bankroll = function() {
    return balance;
  };

  this.spin = function(bet, spot) {
    var num = Math.floor(Math.random() * 38);
    spot = spot.toLowerCase();
    if (spot.length < 3) {
      choices.single(bet, num, spot);
    }
    else {
      choices[spot](bet, num);
    }

    console.log("You now have " + balance);
  };

  this.buyIn = function(val) {
    console.log("Recalculating balance...");
    balance += val;
    console.log("You now have " + balance);
  };

};

r = new Roulette(100);
r.spin(50,"1 to 18");
r.buyIn(100);
r.spin(50,"19 to 36");
r.spin(50,"even");
r.spin(50,"1");
r.spin(50,"first 12");
