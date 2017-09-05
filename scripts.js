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