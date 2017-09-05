// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    return ((array.sort())[(array.length - 1)]);
  },
  
  reversed: function(string){  
    // your code here
    var stringArray = [];
    for (letter in string) {
      stringArray.push(string[letter]);
    }
    return stringArray.reverse().join("");
  },

  loudSnakeCase: function(string){  
    // your code here
    var stringArray = [];
    var checkLetter = function(letter) {
      if (/[a-zA-Z0-9\s]/.test(letter)) {
        return true;
      } else {
        return false;
      }
    }
    
    var transformNext = function(letter, index) {
      stringArray[(index+1)] = stringArray[(index+1)].toUpperCase();
    };
  
    for (letter in string) {
      if (checkLetter(string[letter])) {
        stringArray.push(string[letter]);
      };
    };
  
    stringArray.map(function(letter, index, stringArray) {
      if (letter === " " && stringArray[(index+1)] === " ") {
          stringArray = stringArray.splice(index, 1);
        };
    });  
  
    stringArray.map(function(letter, index, stringArray) {
      
      if (letter === " " && index !== 0) {
        transformNext(letter, index);
        stringArray[index] = "_";
      } else if (letter !== " " && index === 0) {
        stringArray[index] = stringArray[index].toUpperCase();
      } else if (index === 0 && letter === " ") {
        transformNext(letter, index);
        stringArray.shift();
      } else {
        return letter;
      };
    
    });
  return stringArray.join("");
  },

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
    if (array1.length === array2.length) {
      for (var i=0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
          continue;
        } else {
          return false;
        }
      };
      return true;
    } else {
      return false;
    };
  },

  fizzBuzz: function(number){  
    // your code here
    var fizzArray = [];
    for (var i=1; i <= number; i++) {
      if (i %5 === 0 && i %3 === 0) {
        fizzArray.push("FIZZBUZZ");
      } else if (i %5 === 0) {
        fizzArray.push("BUZZ");
      } else if (i %3 === 0) {
        fizzArray.push("FIZZ");
      } else {
        fizzArray.push(i);
      };
    };
    return fizzArray;
  },

  myMap: function(array, func){  
    // your code here
    return array.map(func);
  },

  primes: function(number) {  
    // your code here
    function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
  }

    var primeArray = [2];
    for ( var i = 3; i < number; i+=2 ) {
        if ( isPrime(i) ) {
            primeArray.push(i);
        }
    }
    console.log(primeArray);
    return primeArray;  
}

};

function Roulette(startingBank) {
  this.bank = startingBank;

  this.spin = function(wager, guess) {
    var guessString = guess.toString();
    
    console.log("You guessed '" + guessString + "', with a wager of $" + wager);
    
    var roll = (Math.floor(Math.random() * 38)).toString();
    if (roll === "37") {
      roll = "00";
    }
    
    switch (guessString) {
      case "Even":
        if (parseInt(roll)%2===0) {
          this.bank = this.bank + (wager*2);
        }
        break;
      case "Odd":
        if (parseInt(roll)%2!==0) {
          this.bank = this.bank + (wager*2);
        }
        break;
      case "1 to 18":
        if (parseInt(roll)<=18 && parseInt(roll)!==0) {
          this.bank = this.bank + (wager*2);
        }
        break;
      case "19 to 36":
        if (parseInt(roll)>18 && parseInt(roll)<=36) {
          this.bank = this.bank + (wager*2);
        }
        break;
      case "1st 12":
        if (parseInt(roll)<=12 && parseInt(roll)!==0) {
          this.bank = this.bank + (wager * 3);
        }
        break;
      case "2nd 12":
        if (parseInt(roll)>12 && parseInt(roll)<=24) {
          this.bank = this.bank + (wager * 3);
        }
        break;
      case "3rd 12":
        if (parseInt(roll)>24 && parseInt(roll)<=36) {
          this.bank = this.bank + (wager * 3);
        }
        break;
      default:
        break;
    };

    console.log("Roll was " + roll);
    
    if (guessString === roll) {
      this.bank = this.bank + (wager * 36);
    } else {
      this.bank = this.bank - wager;
    };
    
    console.log("You now have $" + this.bank);

  };

  this.bankroll = function() {
    console.log("You have $" + this.bank);
  };

  this.buyIn = function(buyInAmount) {
    this.bank = this.bank + buyInAmount;
    console.log("You bought in $" + buyInAmount);
    console.log("You now have $" + this.bank);
  }
};
  
var r = new Roulette(100);
r.spin(10, 12);