function Roulette(startingBank) {

  this.bank = startingBank;


  this.spin = function(bet, pick) {

    if (checkBet(bet, this.bank) && checkPick(pick)) {
      this.bank -= bet;
      console.log("You bet $" + bet + " on " + pick);
      var payout_multiplier = payout(pick);

      var result = winner(pick);

      if (result[1]) {
        this.bank += bet * payout_multiplier;
        console.log("You win $" + (bet * payout_multiplier) + ", the spin was " + result[0] + "!!!")
      }
      else {
        console.log("You lose, the spin was " + result[0] + " :(")
      };

      this.bankroll();
    };
  }


  this.bankroll = function() {
    console.log("You now have $" + this.bank);
  }


  this.buyIn = function(amount) {
    if (amount > 0) {
      this.bank += amount;
      console.log("You bought in $" + amount)
      this.bankroll();
    }
    else {
      console.log("You need money to play this game...");
    }
  }



  var checkBet = function(bet, bank) {
    if (bet > 0) {
      if (bet > bank) {
        console.log("You don't got enough cash to bet that much!!");
        return false;
      }
      else {
        return true;
      }
    }
    else {
      console.log("You gotta put down some real money!");
      return false;
    };
  }



  var checkPick = function(pick) {
    var string_picks = ['00', 'Even', 'Odd', '1 to 18', '19 to 36', '1st 12', '2nd 12', '3rd 12'];
    if (string_picks.indexOf(pick) === -1 || pick < 1 || pick > 36) {
      console.log("Valid choices are numbers between 0 and 36, 00, Even, Odd, 1 to 18, 19 to 36, 1st 12, 2nd 12, or 3rd 12.");
      return false;
    }
    else {
      return true;
    };
  }



  var payout = function(pick) {
    var singlePay = ['Even', 'Odd', '1 to 18', '19 to 36'];
    var doublePay = ['1st 12', '2nd 12', '3rd 12'];

    if (singlePay.indexOf(pick) > -1) {
      return 1
    }
    else if (doublePay.indexOf(pick) > -1) {
      return 2
    }
    else {
      return 35
    };
  }



  var winner = function(pick) {
    spin = spinResult();
    if (spin == 37) {
      spin = '00';
    };

    possibleWinners = [spin]

    possibleWinners.push(winnerThird(spin));

    possibleWinners.push(winnerHalf(spin));

    if (between(spin, 1, 36)) {
      possibleWinners.push(winnerOddEven(spin));
    };

    if (possibleWinners.indexOf(pick) > -1) {
      return [spin, true];
    }
    else {
      return [spin, false];
    };
  }



  var spinResult = function() {
    return getRandomIntInclusive(0, 37);
  }



  var winnerThird = function(result) {
    if (between(result, 1, 12)) {
      return '1st 12';
    };
    if (between(result, 13, 24)) {
      return '2nd 12';
    };
    if (between(result, 25, 36)) {
      return '3rd 12';
    };
  }


  var winnerHalf = function(result) {
    if (between(result, 1, 18)) {
      return '1 to 18';
    };
    if (between(result, 19, 36)) {
      return '19 to 36';
    };
  }


  var winnerOddEven = function(result) {
    if (result % 2 === 0) {
      return 'Even';
    }
    else {
      return 'Odd';
    }
  }



  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function between(number, low, high) {
    return (number >= low && number <= high) ? true : false;
  }

};