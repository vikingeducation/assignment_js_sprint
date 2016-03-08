var Roulette = function(bankroll) {
  this.bankroll = bankroll;
  this.odds = { 
    SINGLE: 35, 
    EVEN_ODD: 1,
    THIRDS: 2
  };


  // instantiate a wheel with 00 - 36
  this.wheel = (function() {
    var wheel = ["00"];
    for (var i = 0; i <= 36; i++) {
      wheel.push(i.toString());
    }
    return wheel;
  })();
}


Roulette.prototype.spin = function () {
  return this.wheel[Math.floor(Math.random() * this.wheel.length)];
}

Roulette.prototype.bankroll = function() { return this.bankroll; }

Roulette.prototype.buyIn = function( newMoney ) { this.bankroll += newMoney; }



Roulette.prototype.betSingle = function( betAmount, guess) {
  var winningNumbers = [ guess.toString() ];
  this.bet( betAmount, winningNumbers, this.odds.SINGLE )
}


Roulette.prototype.betEven = function( betAmount) {
  var winningNumbers = [];
  for( i = 1 ; i <= 36; i++) {
    if (i % 2 == 0) {
      winningNumbers.push( i.toString() );
    }
  }

  this.bet( betAmount, winningNumbers, this.odds.EVEN_ODD )
}

Roulette.prototype.betOdd = function( betAmount) {
  var winningNumbers = [];
  for( i = 1 ; i <= 36; i++) {
    if (i % 2 !== 0) {
      winningNumbers.push( i.toString() );
    }
  }

  this.bet( betAmount, winningNumbers, this.odds.EVEN_ODD )
}

Roulette.prototype.betLow = function( betAmount ) {
  var winningNumbers = [];
  for( i = 1 ; i <= 18; i++) {
    winningNumbers.push( i.toString() );
  }

  this.bet( betAmount, winningNumbers, this.odds.EVEN_ODD )
}

Roulette.prototype.betHigh = function( betAmount ) {
  var winningNumbers = [];
  for( i = 19 ; i <= 36; i++) {
    winningNumbers.push( i.toString() );
  }

  this.bet( betAmount, winningNumbers, this.odds.EVEN_ODD )
}

Roulette.prototype.betFirstDozen = function( betAmount ) {
  var winningNumbers = [];
  for( i = 1 ; i <= 12; i++) {
    winningNumbers.push( i.toString() );
  }

  this.bet( betAmount, winningNumbers, this.odds.THIRDS )
}

Roulette.prototype.betSecondDozen = function( betAmount ) {
  var winningNumbers = [];
  for( i = 13 ; i <= 24; i++) {
    winningNumbers.push( i.toString() );
  }

  this.bet( betAmount, winningNumbers, this.odds.THIRDS )
}


Roulette.prototype.betThirdDozen = function( betAmount ) {
  var winningNumbers = [];
  for( i = 25 ; i <= 36; i++) {
    winningNumbers.push( i.toString() );
  }

  this.bet( betAmount, winningNumbers, this.odds.THIRDS )
}


Roulette.prototype.bet = function( betAmount, winningNumbers, odds) {
  var spin = this.spin();
  // see if they won
  if (winningNumbers.indexOf( spin ) != -1 ) {
    console.log("You win, the spin was " + spin);
    this.bankroll += (odds*betAmount);
    console.log("You now have $" + this.bankroll);
  } else {
    console.log("You lost, the spin was " + spin);
    this.bankroll -= betAmount;
    console.log("You now have $" + this.bankroll);
  }
}