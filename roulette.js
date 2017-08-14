
let player = {
  playerBet: 0,
  bankroll: 0,
  playerChipPlacement: 0,
  option: undefined,
  spinResult: 0
}

let buyIn = function() {
    var buyInAmount = Number(prompt("******************** Current cash: \u0024" + player.bankroll + " ******************** \n How much money would you like to put in your bankroll?"));
    player.bankroll += buyInAmount;
    alert("You now have \u0024" + player.bankroll + ".");
  }

let placeBet = function (bankroll) {
    let betInFunction = Number(prompt("******************** Current cash: \u0024" + bankroll + " ******************** \n How much money would you like to bet?"));
    if (betInFunction > bankroll) {
      alert("You can't bet more money than you have. Please bet again.");
      let betInFunction = Number(prompt("******************** Current cash: \u0024" + bankroll + " ******************** \n How much money would you like to bet?"));
    }
    player.playerBet = betInFunction;
    return player.playerBet;
  }

let option = function () {
  let option = prompt("******************** Current cash: \u0024" + bankroll + " ******************** \n ******************** Current bet: 	\u0024" + bet + " ******************** \n Place your bet on the board. Choose 00, 0, 1-36, or an outside bet. \n Outside bets: (e) even, (o) odd, (1to) 1 to 18, (19to) 19 to 36, (1st) 1st 12, (2nd) 2nd 12, (3rd) 3rd 12.");
}

let placeChips = function() {
    let chipPlacement = prompt("Place your bet on the board. Choose 00, 0, 1-36, or an outside bet. \n Outside bets: (e) even, (o) odd, (1to) 1 to 18, (19to) 19 to 36, (1st) 1st 12, (2nd) 2nd 12, (3rd) 3rd 12.");
    if (chipPlacement >= 0 && chipPlacement <= 36) {
      chipPlacement = Number(chipPlacement);
    } else if (chipPlacement === '00') {
      chipPlacement = 37;
    } else {
      player.option = chipPlacement;
    }

    return chipPlacement;
    }

let wheelSpin = function() {
  // Produces a random integer from 0-37, including 0 and 37.
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  return getRandomIntInclusive(0,37);
}


let betModifier = function(chips, option, spinResult) {
  let modifier = 1;
    if (option === "e") {
      if (spinResult % 2 === 0) {
        modifier = 1;
      } else {
        modifier = -1;
      }
    } else if (option === "o"){
      if (spinResult % 2 === 1) {
        modifier = 1;
      } else {
        modifier = -1;
      }
    } else if (option === "1to") {
      if (spinResult >= 0 && spinResult <= 18) {
        modifier = 1;
      } else {
        modifier = -1;
      }
    } else if (option === "19to") {
      if (spinResult >= 19 && spinResult <= 36) {
        modifier = 1;
      } else {
        modifier = -1;
      }
    } else if (option === "1st") {
      if (spinResult >= 1 && spinResult <= 12) {
        modifier = 2;
      } else {
        modifier = -1;
      }
    } else if (option === "2nd") {
      if (spinResult >= 13 && spinResult <= 24) {
        modifier = 2;
      } else {
        modifier = -1;
      }
    } else if (option === "3rd") {
      if (spinResult >= 25 && spinResult <= 36) {
        modifier = 2;
      } else {
        modifier = -1;
      }
    } else if (chips === spinResult) {
      modifier = 35;
    } else {
      modifier = -1;
    }

    return modifier;
}

let calculateWinnings = function(bankroll, bet, chips, option, modifier, spinResult) {
  let winnings = bet * modifier;

  if(modifier > 0) {
  bankroll = bankroll + winnings;
  alert("Congratulations! You beat the odds and the ball landed on " + spinResult + ". \n You just won " + winnings + " dollars!!! \n You now have " + bankroll + "dollars.");
  } else {
  bankroll = bankroll + winnings;
  alert("The ball landed on " + spinResult + ". Better luck next time! You just lost " + winnings + " dollars. \n You now have " + bankroll + " dollars.");
  }

  return bankroll;
}

let bye = function() {
    alert("Thanks for playing!");
    break;
}

let choose = function() {
  let decision = prompt("******************** Current cash: \u0024" + player.bankroll + " ******************** \n Would you like to (a) place bet, (b) buy in, or (c) quit?");
  if (decision === "a") {
    return;
  } else if (decision === "b") {
    buyIn();
  } else if (decision === "c") {
    bye();
  } else if (decision == false) {
    bye();
  } else {
    alert("That's not a valid response.");
    choose();
  }
}

const x = 1;
while (x > 0) {
  choose();
  player.playerBet = placeBet(player.bankroll);
  player.playerChipPlacement = placeChips();
  player.spinResult = wheelSpin();
  player.modifier = betModifier(player.playerChipPlacement, player.option, player.spinResult);
  player.bankroll = calculateWinnings(player.bankroll, player.playerBet, player.playerChipPlacement, player.option, player.modifier, player.spinResult);

}
