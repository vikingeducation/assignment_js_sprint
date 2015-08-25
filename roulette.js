function Roulette(starting) {

  this.bankroll = starting;

  this.spin = function(form) {
    var bet =  parseInt(form.bet.value);
    var choice =  form.choice.value;
    var playMode = form.playMode.value

    if (this.bankroll < bet || isNaN(bet)) {
      document.getElementById("spin_results").innerText = "You cannot bet amount you don't have!";
      document.getElementById("spin_results").style.color = "red";
      return false;
    }

    this.bankroll -= bet;

    result = (Math.floor(Math.random() * 37));
    if (result == 37) result == "00";

    if (choice === result.toString() && playMode === "regular") {
      this.bankroll += bet * 35;
      document.getElementById("spin_results").innerText = "You win $" + bet*35 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result % 2 == 0 && playMode === "even") {
      this.bankroll += bet * 2;
      document.getElementById("spin_results").innerText = "You win $" + bet*2 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result % 2 == 1 && playMode === "odd") {
      this.bankroll += bet * 2;
      document.getElementById("spin_results").innerText = "You win $" + bet*2 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result > 0 && result < 19 && playMode === "first-half") {
      this.bankroll += bet * 2;
      document.getElementById("spin_results").innerText = "You win $" + bet*2 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result >= 19 && result <= 36 && playMode === "second-half") {
      this.bankroll += bet * 2;
      document.getElementById("spin_results").innerText = "You win $" + bet*2 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result >= 1 && result <= 12 && playMode === "first-third") {
      this.bankroll += bet * 3;
      document.getElementById("spin_results").innerText = "You win $" + bet*3 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result >= 13 && result <= 24 && playMode === "second-third") {
      this.bankroll += bet * 3;
      document.getElementById("spin_results").innerText = "You win $" + bet*3 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else if (result >= 25 && result <= 36 && playMode === "third-third") {
      this.bankroll += bet * 3;
      document.getElementById("spin_results").innerText = "You win $" + bet*3 + ", the spin was " + result;
      document.getElementById("spin_results").style.color = "green";
    } else {
      document.getElementById("spin_results").innerText = "You lose, the spin was " + result;
      document.getElementById("spin_results").style.color = "red";
    };
     document.getElementById("bankroll").innerText = "Your current bankroll is: $" + this.bankroll;
  };


  this.buyIn = function(amount) {
    var amount = parseInt(prompt("Enter your buy-in"));
    this.bankroll += amount;

    alert("You bought in $" + amount);
    document.getElementById("bankroll").innerText = "Your current bankroll is: $" + this.bankroll;
  };


  this.printBankroll = function() {
    document.getElementById("bankroll").innerText = "Your current bankroll is: $" + this.bankroll;
  }
}



r = new Roulette(100);
r.printBankroll();
// You bought in $1000
// You now have $1390