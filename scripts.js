// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function (arr) {
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  },
  
  reversed: function(str){  
    var array = str.split('');
    array.reverse();
    return array.join('');
  },

  loudSnakeCase: function(s){
    // first remove punctuation
    s = s.replace(/[.!]/g, "");
    // replace whitespace groups > 1 with just 1 whitespace
    s = s.replace(/\s{2,}/g, " ");
    // split the string into an array of words
    var words = s.split(" ");
    // loop through every word
    for (var i = 0; i < words.length; i++) {
      // capitalize first letter of every word
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // join array of words together with underscores between them
    return words.join("_");
    
  },

  compareArrays: function(arrayA, arrayB){ 
    // your code here (replace the return)
    var arraysEqual = true;
    if (arrayA.length !== arrayB.length) { arraysEqual = false; }
    
    for (var i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) {
        arraysEqual = false;
      }
    } 
    
    return arraysEqual;
    
  },

  fizzBuzz: function(size){
    var result = [];
    for (var i = 1; i <= size; i++) {
      var divisibleBy3 = i % 3 === 0;
      var divisibleBy5 = i % 5 === 0;
      if (divisibleBy3 && divisibleBy5) {
        result.push("FIZZBUZZ");
      } else if (divisibleBy5) {
        result.push("BUZZ");
      } else if (divisibleBy3) {
        result.push("FIZZ");
      } else {
        result.push(i);
      }
    }
    return result;
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}