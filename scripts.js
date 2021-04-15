// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    array.sort();

    let last = array.length - 1;
    return array[last];
  },
  
  reversed: function(string){  
    let array = new Array;
    for (let i = 0; i < string.length; i++) {
      array.unshift(string[i]);
    }
    
    return array.join("");
  },

  loudSnakeCase: function(string){
    // turn string into an array
    let array = string.split(" ");

    // for every word in the array, keep only alphanumeric
    let isalnum = function(char) {
      if (
        (char >= '0' && char <= '9') ||
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z')) {
          return true;
        }
    }

    // transform the array with the new conditions
    for (let i = 0; i < array.length; i++) {
      // filter array
      if (array[i] == "") {
        array.splice(i, 1);
        continue;
      }

      // turn strings to array
      let charsArray = array[i].split("");

      // filter these charsArrays
      for (let j = 0; j < charsArray.length; j++) {
        if (!isalnum(charsArray[j])) {
          charsArray.splice(j, 1);
        }
      }

      // capitalize the first letter
      charsArray[0] = charsArray[0].toUpperCase();

      // turn it to string
      array[i] = charsArray.join("");
    }
   
    // return the array as a string joined by underscore 
    return array.join("_");
  },

  compareArrays: function(arrayA, arrayB){
    if (arrayA.length != arrayB.length) {
      return false;
    } else {
      let len = arrayA.length;
      for (let i = 0; i < len; i++) {
        if (arrayA[i] != arrayB[i]) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(n){ 
    let array = new Array;
    for (let i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        array.push("FIZZBUZZ");
      }
      else if (i % 3 == 0) {
        array.push("FIZZ");
      }
      else if (i % 5 == 0) {
        array.push("BUZZ");
      } else {
        array.push(i);
      }
    }
    return array;
  },

  myMap: function(array, transform){
    for (let i = 0; i < array.length; i++) {
      array[i] = transform(array[i]);
    }
    return array;
  },

  primes: function(n){
    let array = new Array;
    
    for (let i = 2; i <= n; i++) {
      array.push(i);
    }
    
    let isComposite = function(i) {
      for (let k of array) {
        if (k >= i) {
          continue;
        }
        else if (i % k == 0) {
          return true;
        }
      };
    }

    return array.filter(e => !isComposite(e));
  },
}