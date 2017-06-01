var sprintFunctions;
sprintFunctions = {
  largestEl: function (intArray) {
    var largestElement = 0;
    intArray.forEach(function (number) {
      if (number > largestElement) {
        largestElement = number;
      }
    });
    return largestElement;
  },

  reversed: function (stringArray) {
    var reversedString = new String();
    for (var i = stringArray.length - 1; i >= 0; i--) {
      reversedString += stringArray[i];
    }
    return reversedString;
  },

  loudSnakeCase: function (stringArray) {
    var alphaRegEx = /[^A-Za-z0-9]+/g;

    var updatedString = stringArray.replace(/\s[^A-Z]/g, function (string) {
      return string.toUpperCase();
    });
    updatedString = updatedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    updatedString = updatedString.replace(alphaRegEx, '_');

    return updatedString;
  },

  compareArrays: function (array1, array2) {
    if (array1.length !== array2.length)
      return false;
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  },

  fizzBuzz: function (number) {
    var outputArray = [];
    for (var i = 1; i <= number; i++) {
      if((i % 3 === 0) && (i% 5 === 0)) {
        outputArray.push("FIZZBUZZ");
      }
      else {
        if (i % 3 === 0) {
          outputArray.push("FIZZ");
        }
        else if(i % 5 === 0) {
          outputArray.push("BUZZ");
        }
        else outputArray.push(i);
      }
    }

    return outputArray;
  },

  myMap: function (array, func) {
    var funcResultArray = [];
    array.forEach(function (number) {
      funcResultArray.push(func(number));
    });

    return funcResultArray;
  },

  primes: function (number) {
    // Uses Sieve of Eratosthenes to find the primes
    var potentialPrimes = [];
    for(var i=2; i <= number; i++) {
      potentialPrimes.push( {
        value: i,
        isPrime: true}); // e.g. Add {value:1, isPrime:'T'} to potentialPrimes array
    }

    var sqrtOfInputNumber = Math.sqrt(number);
    for(var i=0; i < potentialPrimes.length; i++) {
      if(potentialPrimes[i].isPrime && potentialPrimes[i].value <= sqrtOfInputNumber) {
        var multipleIncrement = potentialPrimes[i].value;
        for(var j = i+multipleIncrement; j <= potentialPrimes.length; j += multipleIncrement) {
          potentialPrimes[j].isPrime = false;
        }
      }
      if(potentialPrimes[i].value > sqrtOfInputNumber)
        break;
    }

    var primeNumbers = [];
    potentialPrimes.forEach(function(element) {
      if(element.isPrime) {
        primeNumbers.push(element.value);
      }
    });

    return primeNumbers;
  }
};

