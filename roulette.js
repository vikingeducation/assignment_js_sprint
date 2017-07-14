var range = function(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
};

var random_between = function(min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}

function Roulette(starting_bankroll) {
  // starting bankroll
  var bankroll = starting_bankroll;
  var PAYOUT_MULTIPLIER = 35;
  var ROULETTE = range(1, 37);
  var winners = {
    number: function(n) {
      return [n];
    },
    even: function() {
      return ROULETTE.filter(function(i) { return i % 2 === 0 });
    },
    odd: function() {
      return ROULETTE.filter(function(i) { return i % 2 !== 0 });
    },
    low: function() {
      return range(1, 19);
    },
    high: function() {
      return range(19, 37);
    },
    first_twelve: function() {
      return range(1, 13);
    },
    second_twelve: function() {
      return range(13, 25);
    },
    third_twelve: function() {
      return range(25, 37);
    }
  };

  var BETS = {
    "number": {payout: 35, "winners": winners.number},
    "even": {payout: 1, "winners": winners.even},
    "odd": {payout: 1, "winners": winners.odd},
    "1 to 18": {payout: 1, "winners": winners.low},
    "19 to 36": {payout: 1, "winners": winners.high},
    "1st 12": {payout: 2, "winners": winners.first_twelve},
    "2nd 12": {payout: 2, "winners": winners.second_twelve},
    "3rd 12": {payout: 2, "winners": winners.third_twelve}
  }

  this.bankroll = function() {
    console.log("You now have $" + bankroll);
    return bankroll;
  };

  this.buyIn = function(quantity) {
    console.log("You bought in $" + quantity);
    bankroll += quantity;
    return this.bankroll();
  };

  this.bet = function(quantity, bet) {
  };

  this.spin = function(quantity, bet) {
    var gamble;
    if (typeof bet === "number")
      gamble = BETS["number"];
    else
      gamble = BETS[bet];
    // choose a random number
    var winner = random_between(1, 36);
    console.log("The winner number is " + winner + "!");
    // is the winner number in the array of his choices?
    if (gamble.winners(bet).includes(winner)) {
      bankroll += quantity * gamble.payout;
      console.log("You've won $" + quantity * gamble.payout + "!");
    } else {
      bankroll -= quantity;
      console.log("You've lost!")
    }
    this.bankroll();
    return true;
  };
}
