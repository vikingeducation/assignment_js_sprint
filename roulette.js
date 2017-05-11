function Roulette(startAmt) {
  this.funds = startAmt;
  this.bankroll = function() {
    console.log('You now have $' + this.funds);
  }
  this.spin = function(amt, choice) {
    if (this.invalidBet(choice)) {
      return console.log('Please enter a valid bet');
    }
    choice = choice.toString().toLowerCase();
    var result = Math.floor(Math.random() * 36);
    if (this.isWin(choice, result)) {
      console.log(this.payOut(choice, amt) + ', the spin was ' + result + '!!');
    } else {
      this.funds -= amt;
      console.log('You Lose, the spin was ' + result);
    }
    this.bankroll();
  };
  this.buyIn = function(amt) {
    this.funds += amt;
    console.log('You bought in $' + amt);
    this.bankroll();
  }
  this.payOut = function(choice, amt) {
    var msg = 'You Win $';
    switch (choice) {
      case '0':
      case '00':
        this.funds += 35 * amt;
        msg += 35 * amt;
        break;
      case 'even':
      case 'odd':
      case '1 to 18':
      case '19 to 36':
        this.funds += amt;
        msg += amt;
        break;
      case '1st 12':
      case '2nd 12':
      case '3rd 12':
        this.funds += amt * 2;
        msg += 2 * amt;
        break;
    }
    return msg;
  };
  this.isWin = function(choice, result) {
    switch (choice) {
      case '0':
      case '00':
        return (result === 0);
      case '1st 12':
        return (result >= 0 && result <= 12);
      case '1 to 18':
        return (result >= 1 && result <= 18);
      case '19 to 36':
        return (result >= 19 && result <= 36);
      case 'even':
        return (result % 2 === 0);
      case 'odd':
        return (result % 2 !== 0);
      case '2nd 12':
        return (result >= 13 && result <= 25);
      case '3rd 12':
        return (result >= 26 && result <= 36);
    }
    return false;
  }
  this.invalidBet = function(choice) {
    if (typeof choice === 'number') {
      return (choice < 0 || choice > 36);
    } else {
      var choices = ['1st 12', '1 to 18', '19 to 36', 'even', 'odd', '2nd 12', '3rd 12'];
      return (choices.indexOf(choice) < 0);
    }
  }
}