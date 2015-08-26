function Roulette(starting) {
  this.bankroll = starting;

  this.spin = function(bet, choice) {
    var bet =  parseInt(prompt("Enter your bet amount"));
    var choice =  parseInt(prompt("Enter your number guess"));

    this.bankroll -= bet;

    result = (Math.floor(Math.random() * 35) + 1);
    if (choice === result) {
      this.bankroll += bet * 35;
      document.getElementById("spin_results").innerHTML = "You win $" + bet*35 + ", the spin was " + result;
    } else {
      document.getElementById("spin_results").innerHTML = "You lose, the spin was " + result;
    };
     document.getElementById("bankroll").innerHTML = "Your current bankroll is: $" + this.bankroll;
  };
  this.buyIn = function(amount) {
    var amount = parseInt(prompt("Enter your buy-in"));
    this.bankroll += amount;

    alert("You bought in $" + amount);
    document.getElementById("bankroll").innerHTML = "Your current bankroll is: $" + this.bankroll;
  };
  this.printBankroll = function() {
    document.getElementById("bankroll").innerHTML = "Your current bankroll is: $" + this.bankroll;
  }
}



r = new Roulette(100);
r.printBankroll();
// You bought in $1000
// You now have $1390