// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    return arr.sort(function(left, right) { return right - left; })[0];
  },

  reversed: function(str){
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){
    var arr = str.replace(/\s\s|\s/g, "_").replace(/[^\w]/g, "").split("");
    arr.forEach(function (el, index, array) {
      if (arr[index-1] == "_") {
        array[index] = el.toUpperCase();
      }
    });
    return arr.join("");
  },

  compareArrays: function(leftArr, rightArr){
    return !leftArr.some(function(leftEl, leftIndex) {
      return leftEl !== rightArr[leftIndex];
    });
  },

  fizzBuzz: function(num){
    var arr = [];
    for (; num >= 1; num--) {
      if (num % 3 && num % 5) {
        arr.unshift(num);
      } else if (!(num % 3) && !(num % 5)) {
        arr.unshift("FIZZBUZZ");
      } else {
        arr.unshift(!(num % 3) ? "FIZZ":"BUZZ");
      }
    }
    return arr;
  },

  myMap: function(arr, func){
    arr.forEach(function(el, index, array) {
      array[index] = func.call(undefined, el);
    })
    return arr;
  },

  primes: function(max){
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
  },
}

var Roulette = (function() {
  var Roulette = function(startCash) {
    var minWheelNum = -1;
    var maxWheelNum = 36;

    var cash = startCash || 100;

    var currentBet = 0;
    var targets = {
      "0": 35,
      "00": 35,
      "Even": 1,
      "Odd": 1,
      "1 to 18": 1,
      "19 to 36": 1,
      "1st 12": 2,
      "2nd 12": 2,
      "3rd 12": 2
    };
    var target = "";
    var multiplier = 0;

    // Show money that's left.
    this.bankroll = function() { console.log(`You now have \$${cash}.`); return this; },

    // Buy in
    this.buyIn = function(amt) {
      if (!amt) { console.log("Please supply an ammount to buy in."); return this; }
      cash += amt;
      console.log(`Bought in for \$${amt}.`);
      this.bankroll();
      return this;
    },

    // Bet money
    this.bet = function(amt) {
      if (amt > cash) { console.log("You need more money to make that bet!"); return; }
      currentBet = amt;
      console.log(`Betting \$${currentBet}.`);
      return this;
    },

    // Target
    this.target = function(tar) {
      var validChoice = false;

      if (tar) {
        for (var key in targets) {
          if (!targets.hasOwnProperty(key)) continue;
          if (key == tar) {
            validChoice = true;
            console.log(`Betting on ${key}. Odds ${targets[key]}:1.`);
            target = tar;
            multiplier = targets[key];
          }
        }
        if (!validChoice) {
          console.log(`Invalid choice: ${tar}`);
          _printTargets();
        }
      } else { _printTargets(); }

      return this;
    },

    // Spin the wheel
    this.spin = function() {
      if (arguments.length == 0) {
        if (currentBet && multiplier && target) {
            _spin();
        } else {
          if (currentBet == 0) { console.log("You must bet something!"); }
          if (target == "") { console.log("You must target a slot/slots in the wheel!"); }
        }
      } else if (arguments.length == 1) {
        this.bet(arguments[0]);
        this.spin();
      } else if (arguments.length >= 2) {
        this.bet(arguments[0]);
        this.target(arguments[1]);
        this.spin();
      }
      return this;
    }

    // Internal methods
    function _printTargets() {
      console.log("Valid choices:");
      for (var key in targets) {
        if (!targets.hasOwnProperty(key)) continue;
          console.log(key);
      }
    }

    function _spin() {
      var randomNumber = _getRandomArbitrary(minWheelNum, maxWheelNum);
      switch(target) {
        case "00":
          if (randomNumber == -1) { _win(randomNumber); return; }
          break;
        case "0":
          if (randomNumber == 0) { _win(randomNumber); return; }
          break;
        case "Even":
          if (!(randomNumber % 2)) { _win(randomNumber); return; }
          break;
        case "Odd":
          if (randomNumber % 2) { _win(randomNumber); return; }
          break;
        case "1 to 18":
          if (randomNumber >= 1 && randomNumber <= 18) { _win(randomNumber); return; }
          break;
        case "19 to 36":
          if (randomNumber >= 19 && randomNumber <= 36) { _win(randomNumber); return; }
          break;
        case "1st 12":
          if (randomNumber >= 1 && randomNumber <= 12) { _win(randomNumber); return; }
          break;
        case "2nd 12":
          if (randomNumber >= 13 && randomNumber <= 24) { _win(randomNumber); return; }
          break;
        case "3rd 12":
          if (randomNumber >= 25 && randomNumber <= 36) { _win(randomNumber); return; }
          break;
      }
      _lose(randomNumber);
    }

    function _win(spin) {
      if (spin == -1) { spin = "00"; }
      var winnings = currentBet * multiplier;
      cash += winnings;
      currentBet = multiplier = 0;
      target = "";
      console.log(`You win \$${winnings}. The spin was ${spin}.`);
      console.log(`You now have \$${cash}.`);
    }

    function _lose(spin) {
      if (spin == -1) { spin = "00"; }
      cash -= currentBet;
      currentBet = multiplier = 0;
      target = "";
      console.log(`You lose. The spin was ${spin}.`);
      console.log(`You now have \$${cash}.`);
    }

    function _getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }

  return Roulette;
})();
