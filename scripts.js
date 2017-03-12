// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  largestEl: function(arr) {
    // your code here
    return Math.max.apply(Math, arr);
  },

  reversed: function(str){
    // your code here
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){
    // your code here
    const stripNonCharacters = str.replace(/[^\w\s]/gi, '').replace(/\s\s+/g, ' ');
    const filteredWords = stripNonCharacters.split(" ");

    for (var i = 0; i < filteredWords.length; i++) {
      filteredWords[i] = filteredWords[i][0].toUpperCase() + filteredWords[i].substring(1);
    }
    return filteredWords.join("_");
  },

  compareArrays: function(array1, array2){
    return array1.toString() === array2.toString();
  },

  fizzBuzz: function(number){
    // your code here
    const array = []
    for (i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        array.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        array.push("FIZZ");
      } else if (i % 5 === 0) {
        array.push("BUZZ");
      } else {
        array.push(i)
      }
    }
    return array
  },


  myMap: function(array, newFunction){
    // your code here
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      const final = newFunction(array[i])
      newArray.push(final)
    }
    return newArray
  },

  primes: function(num){
    // your code here
    const primeNums = []
    for (i = 2; i < num ; i++) {
      var isPrime = true
      for (x = 2; x < i; x++) {
        if (i % x === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) {
        primeNums.push(i);
      }
    }
    return primeNums;
  },

}
