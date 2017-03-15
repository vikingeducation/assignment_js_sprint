// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(someArray){  
    // your code here
    var largest = someArray.sort().reverse();
    return largest[0];
  },
  
  reversed: function(someString){  
    // your code here
    return someString.split("").reverse().join("");
  },

  loudSnakeCase: function(sentence){  
    // your code here
    var sentenceNoPunctuation = sentence.match(/[\s\w]/g).join("").replace(/\s+/g, " ");
    var wordsInSentence = sentenceNoPunctuation.split(" ");

    wordsInSentence.forEach (function(word, i) {
      firstLetter = word.charAt(0).toUpperCase();
      word = firstLetter + word.slice(1);
      wordsInSentence[i] = word;
    });
    
    newSentence = wordsInSentence.join("_");
    return newSentence;
  },

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
    if (array1.length !== array2.length) {
      return false;
    };

    for (i = 0; i < array1.length; i++) {
      if(array1[i] === array2[i]) {
        continue;
      }
      else {
        return false;
      };
    };
    return true;
  },

  fizzBuzz: function(number){  
    // your code here
    var fizzBuzzArray = [];

    for (i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArray.push("FIZZBUZZ");
      }
      else if (i % 3 === 0) {
        fizzBuzzArray.push("FIZZ");
      }
      else if (i % 5 === 0) {
        fizzBuzzArray.push("BUZZ");
      }
      else {
        fizzBuzzArray.push(i);
      };
    };
    return fizzBuzzArray;
  },

  myMap: function(someArray, someFunction){  
    // your code here
    newArray = [];
    someArray.forEach (function(item) {
      newArray.push(someFunction(item));
    });
    return newArray;
  },

  primes: function(number){  
    // your code here
    var primeNumbers = [];

    for (i = 2; i < number; i++) {
      var isPrime = true;

      for (j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
        };
      };

      if (isPrime) {
        primeNumbers.push(i);
      };
    };
    return primeNumbers;
  }
};