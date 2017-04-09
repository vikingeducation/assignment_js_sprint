// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: (array) => {
    const largest =
      array.reduce((largest, num) => {
        return (largest > num) ? largest : num
      });

    return largest;
  },

  reversed: function(string){
    const array_of_strings = string.split('');

    const result =
      array_of_strings.reduce((array, letter) => {
        array.unshift(letter);

        return array
      }, []);

    return result.join('');
  },

  loudSnakeCase: function(string){
    const escapeSpecialChar = /[.*+?^${}()!|[\]\\]/g
    const cleanString = string.replace(escapeSpecialChar, '');

    const words = cleanString.match(/(\w+)/gi);

    const result =
      words.map((word) => {
        return word.replace(word[0], match => {
          return match.toUpperCase();
        });
      }).join('_');

    return result;
  },

  compareArrays: function(array1, array2){
    const isNotEqual =
      array1.some((value, index) => {
        if(array2[index] !== value){
          return true;
        }
      });

    return !isNotEqual;
  },

  fizzBuzz: function(number){
    const fizz = 'FIZZ'
    const fizzIndex = 3;

    const buzz = 'BUZZ'
    const buzzIndex = 5;

    let result = [];

    for(let i = 1; i <= number; i += 1) {
      if(!(i%fizzIndex) && !(i%buzzIndex)) {
        result.push(fizz + buzz);
      }
      else if(!(i%fizzIndex)) {
        result.push(fizz);
      }
      else if(!(i%buzzIndex)) {
        result.push(buzz)
      }
      else {
        result.push(i);
      }
    }

    return result;
  },

  myMap: function(array, callback){
    let result = [];

    for(let i = 0; i <= array.length; i += 1) {
      result.push(callback(array[i]));
    }

    return result;
  },

  primes: function(number){
    let result = [];

    for(let i = 2; i <= number; i += 1) {
      result.push(i);
    }

    for(let i = 2; i <= Math.sqrt(number); i += 1) {
      result =
        result.filter((num) => {
          return (num%i !== 0) || (num === i);
        });
    }

    return result;
  }
}

// Roulette Game
function Roulette(bankroll) {
  this.results = {
    winnings: 0,
    spin: null,
    total: bankroll
  }
}

Roulette.prototype.spin = function(stakes, bet) {
  const payout = 35;

  if(bet === 24) {
    this.results.winnings += (stakes * payout);
    this.results.spin = bet;
  } else {
    this.results.spin = 11;
    this.winnings = bet *= -1;
  }

  this.results.total += this.results.winnings;
  this.results.total -= stakes;

  return this.results;
}
