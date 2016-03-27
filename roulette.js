function Roulette(bankrollAmount){
  this.bankrollAmount = bankrollAmount;
  this.payouts = {
    even: 1,
    odd: 1,
    '1 to 18': 1,
    '19 to 36': 1,
    '1st 12': 2,
    '2nd 12': 2,
    '3rd 12': 2
  };

  this.spin = function(wager, bet){
    var actualNumber = this.getSpin();

    if (bet === actualNumber) {
      this.logWin(actualNumber, 35 * wager);
    } else if (actualNumber !== '00' && actualNumber !== 0 && this.payouts[bet] !== undefined){
      if (this.checkOtherWins(actualNumber, bet)) {
        this.logWin(actualNumber, this.payouts[bet] * wager);
      } else {
        this.logLoss(actualNumber, wager);
      }
    } else {
      this.logLoss(actualNumber, wager);
    }
  };

  this.checkOtherWins = function(actualNumber, bet) {
    var isWin = {
      'even': this.isEven(actualNumber),
      'odd': this.isOdd(actualNumber),
      '1 to 18': actualNumber >= 1 && actualNumber <= 18,
      '19 to 36': actualNumber >= 19 && actualNumber <= 36,
      '1st 12': actualNumber >= 1 && actualNumber <= 12,
      '2nd 12': actualNumber > 12 && actualNumber <= 24,
      '3rd 12': actualNumber > 25 && actualNumber <= 36
    }

    return isWin[bet];
  };

  this.logLoss = function(actualNumber, wager) {
    console.log("You lose, the spin was " + actualNumber + ". :(");
    this.bankrollAmount -= wager;
    this.bankroll();
  }

  this.logWin = function(actualNumber, payoutAmount) {
    console.log("You win $" + payoutAmount + ", the spin was " + actualNumber + "!!!");
    this.bankrollAmount += payoutAmount;
    this.bankroll();
  };

  this.getSpin = function(){
    var spin = Math.floor(Math.random() * 36) - 1;
    if (spin === -1) {
      spin = '00';
    }
    return spin;
  };

  this.buyIn = function(amount){
    console.log("You bought in $" + amount);
    this.bankrollAmount += amount;
    this.bankroll();
  };

  this.bankroll = function(){
    console.log("You now have $" + this.bankrollAmount);
  };

  this.isEven = function(number) {
    if (number === 0 || number === '00') {
      return false
    } else if (number % 2 === 0) {
      return true
    } else {
      return false
    }
  };

  this.isOdd = function(number) {
    if (number === 0 || number === '00') {
      return false
    } else if (number % 2 === 1) {
      return true
    } else {
      return false
    }
  }
}



var r = new Roulette( 100 )  // starting bankroll $100
r.spin( 10, 24 )         // bet 10 on 24
// You Win $350, the spin was 24!!!
// You now have $440.
r.spin( 50, 13 )
// You Lose, the spin was 11 :(
// You now have $390
r.bankroll()
// You now have $390
r.buyIn( 1000 )
// You bought in $1000
// You now have $1390
r.spin( 50, 'even' )
r.spin( 50, '00' )
r.spin( 50, '1st 12' )
r.spin( 50, '1 to 18' )
