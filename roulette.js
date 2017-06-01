//welcome message and bankroll starting amount
alert("Welcome to Roulette. Your starting bankroll is $1000.");
var bankrollMaster = 1000;
//prompts player for a new type of bet
function newBetType() {
  var betTypeMaster = prompt("Your bankroll is: $" + bankrollMaster + "\nPlease choose one of the following bets to place:\n" +
  "A single number 00 or 0-36 (payout 35:1)\n" +
  "even, odd, 1-18, 19-36 (payout 1:1)\n" +
  "1st 12, 2nd 12, 3rd 12 (payout 2:1)");
  return betTypeMaster;
}
//prompts player for a new bet amount
function newBetAmount(){
  var betAmountMaster = prompt("Your bankroll is: $" + bankrollMaster + "\nPlease choose an amount to bet that does not exceed your bankroll.");
  betAmountMaster = Number(betAmountMaster);
  //prevents a user from making a bet larger than their total bankroll
  if (betAmountMaster > bankrollMaster) {
    betAmountMaster = prompt("Your bankroll is: $" + bankrollMaster + "\nPlease choose an amount to bet that does not exceed your bankroll.");
  }
  return betAmountMaster;
}
//creates a spin and changes the bankroll for a win or loss
function newSpin(betType, betAmount, bankroll) {
  bankroll -= betAmount;
  if (betType !== "1-18" && betType !== "19-36" && betType !== "1st 12" && betType !== "2nd 12" && betType !== "3rd 12") {
    var betSingle = parseInt(betType);
    for (var i = 0; i < 37; i++) {
      if (betSingle === i || betType === "00") {
        betType = "single";
      }
    }
  }
  var spin = Math.floor(Math.random() * 37);
  var lost = true;
  //conditions for winning bet
  switch(betType) {
    case "single":
      if (spin === betSingle) {
        bankroll += (betAmount * 36);
        lost = false;
      }
      break;
    case "1-18":
      for (var i = 1; i < 19; i++) {
        if (spin === i) {
          bankroll += (betAmount * 2);
          lost = false;
        }
      }
      break;
    case "19-36":
      for (var i = 19; i < 37; i++) {
        if (spin === i) {
          bankroll += (betAmount * 2);
          lost = false;
        }
      }
      break;
    case "even":
      if (spin % 2 === 0) {
        bankroll += (betAmount * 2);
        lost = false;
      }
      break;
    case "odd":
      if (spin % 2 === 1) {
        bankroll += (betAmount * 2);
        lost = false;
      }
      break;
    case "1st 12":
      for (var i = 1; i < 13; i++) {
        if (spin === i) {
          bankroll += (betAmount * 3);
          lost = false;
        }
      }
      break;
    case "2nd 12":
      for (var i = 1; i < 13; i++) {
        if (spin === i) {
          bankroll += (betAmount * 3);
          lost = false;
        }
      }
      break;
    case "3rd 12":
      for (var i = 1; i < 13; i++) {
        if (spin === i) {
          bankroll += (betAmount * 3);
          lost = false;
        }
      }
      break;
  }
  //conditions for losing bet
  if (lost) {
    alert("You lost! Your bankroll is now " + bankroll);
  }
  else {
    alert("You won! Your bankroll is now " + bankroll);
  }
  return bankroll;
}

//function that immediately runs to play game
(function newBetFunc() {
  var betTypeNew = newBetType();
  var betAmountNew = newBetAmount();
  alert("Spin the wheel!");
  var bankrollInput;
  bankrollInput = bankrollMaster;
  bankrollMaster = newSpin(betTypeNew, betAmountNew, bankrollInput);
  //after spin is complete, asks user if they want to spin again
  if (bankrollMaster > 0) {
    var spinAgain = confirm("Spin again?");
    if (spinAgain) {
      newBetFunc();
    }
  }
  //prevents user from playing further if their bankroll hits 0
  else {
    alert("Sorry, your bankroll is " + bankrollMaster + ". Better luck next time.");
  }
})();
