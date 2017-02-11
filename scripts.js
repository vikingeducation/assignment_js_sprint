// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {
    array.sort(function( a , b ){
      return a - b;
    });
    return array[(array.length) - 1]
  },

  reversed: function(string) {
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(sentence) {
    sentence = sentence.replace(/\s/g, '_');
    sentence = sentence.replace(/\W/g, '');
    sentence = sentence.replace(/_+/g, '_');
    sentence = sentence.replace(/_\s*([a-z])/g, function(C) {
      return C.toUpperCase();
    });
    return sentence;
  },

  compareArrays: function(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      console.log("They aren't even the same length! The first array is " + arrayOne.length + " indexes long, and the second array is " + arrayTwo.length + " indexes long.");
      return false;
    }
    for (var i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    console.log("They are a match(ish)!");
    return true;
  },

  fizzBuzz: function(num){
    if (isNaN(num) === true) {
      console.log("Please enter a number.");
      return false;
    }
    var numArray = [];
    if (num > 0) {
      for (var i = 1; i <= num; i++) {
        numArray.push(i);
      }
      for (var e = 1; e <= numArray.length; e++) {
        if (numArray[e] % 3 === 0) {
          if(numArray[e] % 5 ===0) {
            numArray[e] = "FIZZBUZZ";
          }
          else {
            numArray[e] = "FIZZ";
          }
        }
        else if (numArray[e] % 5 === 0) {
          numArray[e] = "BUZZ";
        }
      }
      return numArray;
    }
    if (num < 0) {
      for (var o = -1; o >= num; o--) {
        numArray.push(o);
      }
      for (var u = 1; u <= numArray.length; u++) {
        if (numArray[u] % 3 === 0) {
          if(numArray[u] % 5 ===0) {
            numArray[u] = "FIZZBUZZ";
          }
          else {
            numArray[u] = "FIZZ";
          }
        }
        else if (numArray[u] % 5 === 0) {
          numArray[u] = "BUZZ";
        }
      }
      return numArray;
    }
  },

  myMap : function(array, func) {
    for (var i = 0; i < array.length; i++) {
      if (isNaN(array[i]) === true) {
        console.log("This function only works with arrays that have numbers at it's valid indexes");
        return false;
      }
    }
    return array.map(func);
  },

  primes : function(num) {
    var array = [];
    var primeArray = [];
    for (var i = 2; i <= num; ++i) {
      if (!array[i]) {
        primeArray.push(i);
        for (var o = i << 1; o <= num; o += i) {
          array[o] = true;
        }
      }
    }
    return primeArray;
  },
}
