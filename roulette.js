var Roulette = function(bankroll) {
  this.bankroll = bankroll;
  this.result;
};


Roulette.wheel = Array.apply(null, Array(38)).map(function(i, j) {
  if (j  < 2) {
    if (j == 0) j = '00';
    if (j == 1) j = '0';
  } else {
    j = (j - 1).toString();
  }
  return j;
});


Roulette.prototype.bankroll = function() {
  return 'You have $' + this.bankroll;
};


Roulette.prototype.buyIn = function(amount) {
  this.bankroll += amount;
  return 'You bought $' + amount + 
    "\nYou now have $" + this.bankroll;
};


Roulette.prototype.randomResult = function() {
  var randomIndex = ~~(Math.random() * 100 % Roulette.wheel.length);
  this.result = Roulette.wheel[randomIndex];
};


Roulette.prototype.spin = function(bet, number, betType) {

  this.randomResult();

  if (!number.toString().match(/\d+/g) && betType == 'exact') {
    return 'Invalid number';
  }

  if (betType == 'exact') {
    return this.spinForExact(bet, number);
  } else if (betType == 'quality') {
    return this.spinForQuality(bet, number);
  } else if (betType == 'halves') {
    return this.spinForHalves(bet, number);
  } else if (betType == 'thirds') {
    return this.spinForThirds(bet, number);
  } else {
    return 'Invalid betType';
  }
};


Roulette.prototype.spinForQuality = function(bet, number) {
  if (number == 'even' && this.result % 2 == 0) {
    payout = this.calculatePayoutFor(bet, 'quality');
    return this.win(bet, number, payout);
  } else if (number == 'odd' && this.result % 2 != 0) {
    payout = this.calculatePayoutFor(bet, 'quality');
    return this.win(bet, number, payout);
  } else {
    return this.lose(bet, number);
  }
};


Roulette.prototype.spinForHalves = function(bet, number) {
  if (number == '1-18' && (~~this.result >= 1 && ~~this.result <= 18)) {
    payout = this.calculatePayoutFor(bet, 'halves');
    return this.win(bet, number, payout);
  } else if (number == '19-36' && (~~this.result >= 19 && ~~this.result <= 36)) {
    payout = this.calculatePayoutFor(bet, 'halves');
    return this.win(bet, number, payout);
  } else {
    return this.lose(bet, number);
  }
};


Roulette.prototype.spinForThirds = function(bet, number) {
  if (number == '1-12' && (~~this.result >= 1 && ~~this.result <= 12)) {
    payout = this.calculatePayoutFor(bet, 'thirds');
    return this.win(bet, number, payout);
  } else if (number == '13-24' && (~~this.result >= 13 && ~~this.result <= 24)) {
    payout = this.calculatePayoutFor(bet, 'thirds');
    return this.win(bet, number, payout);
  } else if (number == '25-36' && (~~this.result >= 25 && ~~this.result <= 36)) {
    payout = this.calculatePayoutFor(bet, 'thirds');
    return this.win(bet, number, payout);
  } else {
    return this.lose(bet, number);
  }
};


Roulette.prototype.spinForExact = function(bet, number) {
  if (this.result == number) {
    var payout = this.calculatePayoutFor(bet, 'exact');
    return this.win(bet, number, payout);
  } else {
    return this.lose(bet, number);
  }
};


Roulette.prototype.calculatePayoutFor = function(bet, betType) {
  var payout;
  if (betType == 'exact') {
    payout = bet * Roulette.wheel.length;
  } else if (betType == 'quality') {
    payout = bet;
  } else if (betType == 'halves') {
    payout = bet;
  } else if (betType == 'thirds') {
    payout = bet * 2;
  }
  return payout;
};


Roulette.prototype.win = function(bet, number, payout) {
  this.bankroll += payout;
  return 'You spun ' + this.result +
      "\nYou bet $" + bet +
      " on " + number +
      "\nYou won $" + payout +
      "\nYou're bankroll is now $" + this.bankroll;
};


Roulette.prototype.lose = function(bet, number) {
  this.bankroll -= bet;
  return 'You spun ' + this.result +
      "\nYou bet $" + bet +
      " on " + number +
      "\nYou lose, you're bankroll is now $" + this.bankroll;
};








