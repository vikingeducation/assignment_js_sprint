// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
     return Math.max.apply(null, input);

  },

  reversed: function(input){
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(input){
    input = input.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    var array = input.split(" ").filter(function(n){ return n != "" });
    for(i = 0; i < array.length; i++) {
      array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1,array[i].length)
    };
    return array.join("_");
  },

  compareArrays: function(array1, array2){
    console.log(array1);
    console.log(array2);
    if (array1.length != array2.length ) {
      return false;
    } else {
      for (var i = 0; i < array1.length; i++) {
        if ( array1[i] != array2[i] ) {
          return false;
        };
      };
      return true;
    }
  },

  fizzBuzz: function(number){
    result = [];
    for (var i = 1; i <= number; i++) {
      if (i % 5 == 0 && i % 3 == 0) {
        result.push("FIZZBUZZ")
      }
      else if (i % 3 == 0) {
        result.push("FIZZ")
      }
      else if (i % 5 == 0) {
        result.push("BUZZ")
      } else {
        result.push(i)
      };
    };
    return result;
  },

  myMap: function(array, func){
    for (var i = 0; i < array.length; i++) {
      array[i] = func(array[i]);
    };
    return array;
  },

  primes: function(number){
    primes_list = [];
    for (var current_number = 2; current_number <= number; current_number++) {
      if (isPrime(current_number)) {
        primes_list.push(current_number);
      };
    };
    return primes_list;
  },
}

function isPrime(n) {

   // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   // Finally return whether n is prime or not.
   return isPrime;
};