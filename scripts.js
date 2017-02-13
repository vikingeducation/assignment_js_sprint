// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {  
    var array = array.sort();
    return array[array.length - 1];
  },
  
  reversed: function(string){  
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(string){  
    var string = string.split(/\s+/);
    for(var i = 0; i < string.length; i++) {
      string[i] = string[i].replace(/[^A-z]+/g, '');
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join('_');
  },

  compareArrays: function(array1, array2){ 
    if (array1.length !== array2.length) {
      return false;
    } else {
      for( var i = 0; i < array1.length; i++ ) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(number){  
    var array = [number];
    for (var i = number; i > 1; i--) {
      var candidate = (number - (array.length - 1)) - 1;
      if (candidate % 3 === 0 && candidate % 5 === 0) {
        candidate = "FIZZBUZZ";
      } else if (candidate % 5 === 0) {
        candidate = "BUZZ";
      } else if (candidate % 3 === 0) {
        candidate = "FIZZ";
      }
      array.unshift(candidate);
    }
    return array;
  },

  myMap: function(array, func){  
    var mapped = [];
    array.forEach( function(element) {
      mapped.push(func(element));
    } );
    return mapped;
  },

  primes: function(number){  
    var primes = [];
    for( var i = 2; i < number; i++ ) {
      var is_prime = true;
      primes.forEach( function(primeNumber) {
        if ( i % primeNumber === 0 ) { 
          is_prime = false;
        }
      })
      if (is_prime) { 
        primes.push(i);
      }
    }
    return primes;
  },
}