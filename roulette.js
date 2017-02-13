function Roulette(startingBankroll) {
  this.money = startingBankroll;
  this.bankroll = function(amount) {
    if ( amount ) {
      this.money += amount;
    }
    console.log("You now have $" + this.money );
  };
  this.buyIn = function(amount) {
    console.log( "You bought in $" + amount );
    this.bankroll(amount);
  };
  this.spinWheel = function() {
    return Math.floor( Math.random() * 38 ) + 1;
  }
  this.invalidNumberInput = function(input) {
    if (input === parseInt(input, 10) && input >= 1 && input <= 36 ) {
      return false;
    } else {
      return true;
    }
  };
  this.getStringWinCondition = function(betIsOn, spinOutcome) {
    var win;
    switch(betIsOn) {
      case "0":
        spinOutcome === 37 ? win = true : win = false;
        break;
      case "00":
        spinOutcome === 38 ? win = true : win = false;
        break;
      case "Even":
        spinOutcome % 2 === 0 ? win = true : win = false;
        break;
      case "Odd":
        spinOutcome % 2 === 1 ? win = true : win = false;
        break;
      case "1 to 18":
        1 <= spinOutcome <= 18 ? win = true : win = false;
        break;
      case "19 to 36":
        19 <= spinOutcome <= 36 ? win = true : win = false;
        break;
      case "1st 12":
        1 <= spinOutcome <= 12 ? win = true : win = false;
        break;
      case "2nd 12":
        12 <= spinOutcome <= 24 ? win = true : win = false;
        break;
      case "3rd 12":
        24 <= spinOutcome <= 36 ? win = true : win = false;
        break;
      default:
        return undefined;
    }
    return win;
  };
  this.payoutMultiplier = function(betIsOn) {
    switch(betIsOn) {
      case "0":
        return 35;
      case "00":
        return 35;
      case "Even":
        return 1;
      case "Odd":
        return 1;
      case "1 to 18":
        return 1;
      case "19 to 36":
        return 1;
      case "1st 12":
        return 2;
      case "2nd 12":
        return 2;
      case "3rd 12":
        return 2;
      default:
        return 35;
    }
  };
  this.getNumberWinCondition = function(betIsOn, spinOutcome) {
    if ( this.invalidNumberInput(betIsOn) ) {
      win = undefined;
    } else {
      spinOutcome === betIsOn ? win = true : win = false;
    }
    return win;
  };
  this.determineWin = function(betIsOn, spinOutcome) {
    if (typeof betIsOn === 'number') {
      win = this.getNumberWinCondition( betIsOn, spinOutcome );
    } else if ( typeof betIsOn === 'string' ) {
      win = this.getStringWinCondition( betIsOn, spinOutcome );
    }
    return win;
  };
  this.winMessage = function(bet, betIsOn, spinOutcome) {
    var amountWon = bet * this.payoutMultiplier(betIsOn);
    console.log("You win $" + amountWon + ", the spin was " + spinOutcome + "!!!");
    this.bankroll(amountWon);
  };
  this.loseMessage = function(bet, spinOutcome) {
    console.log("You lose, the spin was " + spinOutcome + " :(");
    this.bankroll(-1 * bet);
  };
  this.spin = function(bet, betIsOn) {    
    // spin wheel
    var spinOutcome = this.spinWheel();

    // get outcome
    var win = this.determineWin(betIsOn, spinOutcome);

    // declare outcome
    if ( win === undefined ) {
      return 'Invalid bet!';
    } else if ( win ) {
      this.winMessage(bet, betIsOn, spinOutcome);
    } else {
      this.loseMessage(bet, spinOutcome);
    }
  };
}