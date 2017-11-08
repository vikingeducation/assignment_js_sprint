var bankroll,
    bet,
    gamble,
    land,
    addBank,
    increase,
    cashOut,
    start = 100;

//sets up starting bankroll
var newRoulette = function() {
  bankroll = start;
  alert("Your starting bankroll is $" + bankroll);
}

//explain rules and payout of game
var rules = function() {
  alert("You can choose a number from 1-36. The payout is 35:1.");
}

//allows player to add more money
var moreMoney = function(){
  increase = Number(prompt("How much would you like to add? Please enter a number without the $ sign"));
  bankroll = bankroll + increase;
  alert("You now have $" + bankroll);
}

//collects the players bet, amount they are gambling and spins the winning number
var spin = function(){
  bet = Number(prompt("Would would you like to bet on?\nChoose a number 1 - 36."));
  gamble = Number(prompt("How much would you like to bet?\nYou have $" + bankroll));
  land = Math.floor(Math.random()* 36 + 1);

//if player loses, bet subtracted from bankroll
  if(land != bet){
  bankroll = bankroll - gamble;
  alert("You lose, the spin was " + land);
  }

//if player wins, bet * 35 added to bankroll
  else if(land == bet){
    bankroll = bankroll + (gamble * 35);
    alert("You win! Your bankroll just increased by $" + (gamble*35));
  }

//gmae over when money is gone
  if (bankroll < 1){
    alert("GAME OVER");
    return;

//option to cash out and end game
  } else {
      cashOut = confirm("You now have $" + bankroll + ". Would you like to keep playing?");
      if (!cashOut) {
        alert("Thanks for playing!");
        return;
      }

//option to buyin more money and game continues
      addBank = confirm("Would you like to buy in?");
      if (addBank) {
        moreMoney();
      }
      spin();
  }
}

//starts the game
var check = confirm("Would you like to play roulette?");
if (check) {
  newRoulette();
  rules();
  spin();
}
