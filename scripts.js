// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    let largest = null;
    array.forEach( function(element) {
      if (largest < element) largest = element;
    })
    return largest;
  },
  
  reversed: function(string){
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
    let words = string.split(/\s+/);
    words = words.map( function(word) {
      word = word.replace(/[^a-z_]/gi, "");
      return word[0].toUpperCase() + word.substring(1, word.length);
    })
    return words.join("_");
  },

  compareArrays: function(array1, array2){
    if (array1.length != array2.length) return false;
    for (i = 0; i < array1.length; i++) {
      if (array1[i] != array2[i]) return false;
    }
    return true;
  },

  fizzBuzz: function(num){
    array = [];
    for (i = 1; i <= num; i++) {
      if (i % 3 === 0) {
        if (i % 5 === 0) array.push("FIZZBUZZ");
        else array.push("FIZZ");
      } else if (i % 5 === 0) array.push("BUZZ");
      else array.push(i);
    }
    return array;
  },

  myMap: function(array, myFunction){
    result = [];
    for (i = 0; i < array.length; i++) {
      result.push(myFunction(array[i]));
    }
    return result;
  },

  primes: function(num){
    let result = [];
    if (num < 2) return null;
    else {
      result.push(2);
      for (n = 3; n < num; n += 2) {
        let prime = true;
        for (i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
          if (n % i === 0) {
            prime = false;
            break;
          }
        }
        if (prime) result.push(n);
      }
    }
    return result;
  },
}