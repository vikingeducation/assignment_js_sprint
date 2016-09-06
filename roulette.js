function Roulette(bank) {

  var balance = bank;

  this.bankroll = function() {
    return balance;
  };

  "even": function(num, bet) {

  }

  this.spin = function(bet, spot) {
    var num = Math.floor(Math.random() * 38);
    spot = spot.toLowerCase();
    Roulette.call(this, spot, num, bet);

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
