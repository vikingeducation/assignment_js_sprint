// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  largestEl: function(array){
    var largest = array[0];
    for (i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(string){
    var newString;
    newString = string.split("");
    newString = newString.reverse();
    newString = newString.join("");
    return newString;
  },

  loudSnakeCase: function(string){
    var newString = [];
    var alphaNum = /^[a-z0-9]+$/i;
    if (string[0] === " ") {
      newString[0] = "_";
    }
    else if (alphaNum.test(string[0])) {
      newString[0] = string[0].toUpperCase();
    }
    else {
      newString[0] = "";
    }
    for (i = 1; i < string.length; i++) {
      if (string[i] === " ") {
        if (string[i-1] === " ") {
          newString.push("");
        }
        else {
          newString.push("_");
        }
      }
      else if (alphaNum.test(string[i])) {
        if (string[i - 1] === " " || alphaNum.test(string[i-1]) === false) {
          newString.push(string[i].toUpperCase());
        }
        else {
          newString.push(string[i]);
        }
      }
      else {
        newString.push("");
      }
    }
    return newString.join("");
},

  compareArrays: function(array1, array2){
    var matches = [];
    if (array1.length !== array2.length) {
      return false;
    }
    else {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        matches.push(1);
      }
    }
  }
  if (matches.length === array1.length) {
    return true;
  }
  else {
    return false;
  }
  },

  fizzBuzz: function(end){
    var fizzBuzzArray = [];
    for (i = 1; i <= end; i++) {
      if (i % 15 === 0) {
        fizzBuzzArray.push("FIZZBUZZ");
      }
      else if (i % 5 === 0) {
        fizzBuzzArray.push("BUZZ");
      }
      else if (i % 3 === 0) {
        fizzBuzzArray.push("FIZZ");
      }
      else {
        fizzBuzzArray.push(i);
      }
    }
    return fizzBuzzArray;
  },

  myMap: function(array1, funct1) {
    var answersArray = [];
    for (i = 0; i < array1.length; i++){
      answersArray.push(funct1(array1[i]));
    }
    return answersArray;
  },

  primes: function(end){
    var primes = [];
    var divisors = [];
    for (i = 2; i < end; i++) {
      for (j = 2; j <= i; j++) {
        if (i % j === 0) {
          divisors.push("divisor");
        }
      }
      if (divisors.length < 2) {
        primes.push(i);
      }
      divisors = [];
    }
    return primes;
  },
}
