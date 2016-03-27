// FILL IN THE FUNCTIONS BELOW

var isPrime = function(number){
  for (var i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

var sprintFunctions = {
  largestEl: function(array){
    var max = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    return max;
  },

  reversed: function(string){
    var reversedString = "";

    for (var i = 0; i < string.length; i++) {
      reversedString = string[i] + reversedString;;
    }

    return reversedString;
  },

  loudSnakeCase: function(string){
    var inputArray = string.match(/[A-Za-z]+/g);
    var outputArray = [];

    inputArray.forEach(function(element){
      outputArray.push(element.charAt(0).toUpperCase() + element.slice(1));
    });

    return outputArray.join("_");
  },

  compareArrays: function(array1, array2){
    if (array1.length !== array2.length) {
      return false;
    } else {
      for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
    }

    return true;
  },

  fizzBuzz: function(number){
    var result = [];

    for (var i = 1; i <= number; i++) {
      if (i % 15 === 0) {
        result.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        result.push("FIZZ");
      } else if (i % 5 === 0) {
        result.push("BUZZ");
      } else {
        result.push(i);
      }
    }

    return result;
  },

  myMap: function(array, inputFunction){
    var functionOutputs = [];

    array.forEach(function(element){
      var output = inputFunction(element);
      functionOutputs.push(output);
    })

    return functionOutputs;
  },

  primes: function(number){
    var result = [];

    if (number < 2){
      return result
    } else if (number >= 2){
      result.push(2)
      if (number > 2){
        for (var i = 3; i <= number; i += 2){
          if (isPrime(i)) {
            result.push(i);
          }
        }
      }
    }

    return result;
  },
}