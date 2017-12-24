// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var highest = array[0];
    for (i = 1; i < array.length; i++) {
      if (highest < array[i]) {
        highest = array[i];
      }
    }
  return highest;
  },

  reversed: function(string){
    var gnirts = String();
    for (i = string.length -1; i >= 0; i--) {
      gnirts += string.charAt(i);
    }
    return gnirts;
  },

  loudSnakeCase: function(string){
    // really dirty code, really shouldn't do this
    var lsc = String ();
    var capitalize = true;

    for (i = 0; i < string.length; i++) {
      if (string.charAt(i) === " ") {
        if (capitalize !== true){
          lsc += "_";
        capitalize = true;
        }
      }
      else if (string.charAt(i) === "." || string.charAt(i) === "!") {

      }
      else {
        if (capitalize === true) {
          lsc += string.charAt(i).toUpperCase();
        }
        else {
          lsc += string.charAt(i);
        }
        capitalize = false;
      }
    }
    return lsc;
  },

  compareArrays: function(array1, array2){
    var same = true;
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        same = false;
        break;
      }
    }
    return same;
  },

  fizzBuzz: function(num){
    string = [1];
    for (i = 2; i<= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        string[(i - 1)] = "FIZZBUZZ";
      }
      else if (i % 3 === 0) {
        string[(i - 1)] = "FIZZ";
      }
      else if (i % 5 === 0) {
        string[(i - 1)] = "BUZZ";
      }
      else {
        string[(i - 1)] = i;
      }
    }
    return string;
  },

  myMap: function(array){
    var newArray = [];
      for (i = 0; i < array.length; i++) {
        newArray[i] = (array[i] * 2);
      }
    return newArray
  },

  primes: function(number){
    var string = [];
    for (i = 2; i < number; i++) {
      var factors = 0;

      for (e = 1;  e <= i; e++) {
        if (i % e === 0) {
          factors++;
        }
      }

      if (factors === 2) {
          string.push(i);
      }
    }
    return string;
  },

}


var player = {
funds: 100,
boughtIn: 0,
bet: 0
}

//Roulette Game
alert("In this game you will be able to place bets on a roulette wheel. We have taken the courtesy of giving you a starting bank roll of $100.")

while (true) {

//Ask the player if they want to add to their bank roll and record these for later.
if (confirm("Would you like to add to you bank roll?") === true) {
while (true) {
  var buyIn = parseInt(prompt("How much would you like to add to your bankroll?", "0"));

  if (buyIn >= 0) {
    player.funds += buyIn;
    player.boughtIn += buyIn;
    break;
  }

  else {
    alert("Please input a valid number.");
  }
}
}

//Ask the player for how much they are going to bet.
while (true) {
player.bet = 0;
player.bet = parseInt(prompt("You have $" + player.funds + " How much would you like to bet this round?", "10"));

if (player.bet > player.funds) {
  alert("You can't bet more than you have!");
}

else if (player.bet > 0) {
  if (confirm("So you will bet $" + player.bet + " of your $" + player.funds + "?") === true) {
    player.funds -= player.bet;
    break;
  }
}

else {
  alert("Please input a valid amount to bet.");
}
}

//Spin the wheel.
var spin = Math.floor((Math.random() * 37.999));

//Ask the player to choose a type of bet and check if it was a win or not. Uses for loop instead of switch so breaks will effect the parent while loop.
while (true) {
var winMult = 0;
var typeOfBet = parseInt(prompt("Enter the corresponding number for the type of bet you want to place:\n[1] - Bet on 0, (35:1)\n[2] - Bet on 00, (35:1)\n[3] - Bet on evens, (2:1)\n[4] - Bet on odds, (2:1)\n[5] - Bet on 1-18, (2:1)\n[6] - Bet on 19-36, (2:1)\n[7] - Bet on 1-12, (3:1)\n[8] - Bet on 13-24, (3:1)\n[9] - Bet on 25-36, (3:1)"));

//0
if (typeOfBet === 1) {
  if (spin === 0) {
    winMult = 35;
  }
  break;
}
//00 (37)
else if (typeOfBet === 2) {
  if (spin === 37) {
    winMult = 35;
  }
  break;
}
//even
else if (typeOfBet === 3) {
  if ((spin % 2) === 0 && 0 <= spin <= 36) {
    winMult = 2;
  }
  break;
}
//odd
else if (typeOfBet === 4) {
  if ((spin % 2) === 1 && 0 <= spin <= 36) {
    winMult = 2;
  }
  break;
}
//1-18
else if (typeOfBet === 5) {
  if (1 <= spin <= 18) {
    winMult = 2;
  }
  break;
}
//19-36
else if (typeOfBet === 6) {
  if (19 <= spin <= 36) {
    winMult = 2;
  }
  break;
}
//1-12
else if (typeOfBet === 7) {
  if (1 <= spin <= 12) {
    winMult = 3;
  }
  break;
}
//13-24
else if (typeOfBet === 8) {
  if (13 <= spin <= 24) {
    winMult = 3;
  }
  break;
}
//25-36
else if (typeOfBet === 9) {
  if (25 <= spin <= 36) {
    winMult = 3;
  }
  break;
}
//invalid
else {
  alert("Please input a valid key response.");
}
}

//Apply the effect of a win/loss to the player.
player.funds += (winMult * player.bet);

//Convert 37 into 00 for the display, if the player won the winMult will always be greater than 0.
if (spin === 37) {
if (winMult > 0) {
  alert("The roulette spun a 00 you won! You add $" + (winMult * player.bet) + " bringing you up to $" + player.funds + ".");
}
else {
  alert("The roulette spun a 00 darn, a miss. You have $" + player.funds + " left to play with.");
}
}
else {
if (winMult > 0) {
  alert("The roulette spun a " + spin + " you won! You add $" + (winMult * player.bet) + " bringing you up to $" + player.funds + ".");
}
else {
  alert("The roulette spun a " + spin + " darn, a miss. You have $" + player.funds + " left to play with.");
}
}

//Ask if they want to play again, this controls the while loop the game resides within.
if (confirm("Would you like to spin again?") === false) {
break;
}
}

//Display how the player did in the end.
if ((player.funds - player.boughtIn) - 100 > 0) {
alert("Over the course of your run you made $" + ((player.funds - player.boughtIn) - 100) + ".\nCongratulations!");
}
else if ((player.funds - player.boughtIn) - 100 < 0) {
alert("Over the course of your run you lost $" + -1*((player.funds - player.boughtIn) - 100) + ".\nBetter luck next time.");
}
else {
alert("Looks like you broke even this time, huh.");
}
