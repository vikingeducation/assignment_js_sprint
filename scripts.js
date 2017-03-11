// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largestEl = array[0];
    array.forEach(function(el) {
      if (el > largestEl) {
        largestEl = el;
      }
    });
    return largestEl;
  },

  reversed: function(string){
    var reversed = '';
    for (var i = string.length - 1; i >=0 ; i--) {
      reversed += string[i];
    }
    return reversed;
  },

  loudSnakeCase: function(sentence){
    // Remove empty strings
    sentence = sentence.toLowerCase().split(' ').filter(function(word) {
      return word;
    });

    for (var i = 0; i < sentence.length; i++) {
      // Replace all non-word-space patterns (punctuation) with empty string
      sentence[i] = sentence[i].replace(/[^\w\s]|_/g, "");
      // Make loudSnakeCase
      var letters = sentence[i].split('');
      letters[0] = letters[0].toUpperCase();
      sentence[i] = letters.join('');
    }

    sentence = sentence.join('_');
    // console.log(sentence);
    return sentence;
  },

  compareArrays: function(arr1, arr2){
    var isEqual = true;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        isEqual = false;
      }
    }
    return isEqual;
  },

  fizzBuzz: function(n){
    var elements = [];
    for (var i = 1; i <= n; i++) {
      var el = '';
      if (i % 3 == 0) {
        el += 'FIZZ';
      }
      if (i % 5 == 0) {
        el += 'BUZZ';
      }

      if (el) {
        elements.push(el);
      } else {
        elements.push(i);
      }
    }
    // console.log(elements);
    return elements;
  },

  myMap: function(arr, func){
    for (var i = 0; i < arr.length; i++) {
      arr[i] = func(arr[i]);
    }
    return arr;
  },

  primes: function(num){
    var primes = [2];
    var isPrime = function(num) {
      // Return false for even numbers
      if (num % 2 == 0) {
          return false;
      }
      // Only look for odd factors up to the square root of the current number
      for (var i = 3; i <= Math.sqrt(num); i += 2) {
        // If the square root of the current number can be evenly divided by one of its factors, it is not prime
        // e.g. Math.sqrt(9) % 3 == 0 and returns false
        if (num % i == 0) {
          return false;
        }
      }
      // Return true in all other cases
      return true;
    };

    for (var i = 3; i < num; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    // console.log(primes);
    return primes;
  },
}
