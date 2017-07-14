// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var largest;
    for (var i = 0; i < arr.length; i++) {
      if (largest === undefined) {
        largest = arr[i];
      } else if (arr[i] > largest) {
        largest = arr[i]
      }
    }
    return largest;
  },

  reversed: function(s){
    var acc = "";
    for (var i = 0; i < s.length; i++) {
      acc = s[i] + acc;
    }
    return acc;
  },

  loudSnakeCase: function(s){
    var title = function(s) {
      return s[0].toUpperCase() + s.slice(1);
    };
    words = s.toLowerCase().match(/[a-z]+/g);
    return words.map(title).join("_");
  },

  compareArrays: function(arr1, arr2){
    var is_equal = true;
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        is_equal = false;
        break;
      }
    }
    return is_equal;
  },

  fizzBuzz: function(n){
    var acc = [];
    for (var i = 1; i < n + 1; i++) {
      if ((i % 3 === 0) && (i % 5 === 0))
        acc.push("FIZZBUZZ");
      else if (i % 3 === 0)
        acc.push("FIZZ");
      else if (i % 5 === 0)
        acc.push("BUZZ");
      else
        acc.push(i);
    }
    return acc;
  },

  myMap: function(arr, f){
    var acc = [];
    for (var i = 0; i < arr.length; i++) {
      acc.push(f(arr[i]));
    }
    return acc;
  },

  primes: function(n){
    var isPrime = function(n) {
      var result = true;
      for (var i = 2; i < n + 1; i++) {
        if (n === i) break;
        if (n % i === 0) {
          result = false;
          break;
        }
      }
      return result;
    };

    var acc = [];
    for (var i = 2; i < n + 1; i++) {
      if (isPrime(i)) acc.push(i);
    }
    return acc;
  }
}
