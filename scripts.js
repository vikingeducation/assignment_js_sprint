// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    return array.sort()[array.length - 1];
  },
  
  reversed: function(string){  
    // your code here
    var rev_string = "";

    for (var i = string.length - 1; i >= 0; i--) {
      rev_string += string[i];
    }

    return rev_string;
  },

  loudSnakeCase: function(sentence){  
    var words = [];
    var new_word = "";
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i].match(/[a-zA-Z]/)) {
        if (new_word)
          new_word += sentence[i];
        else
          new_word += sentence[i].toUpperCase();
      }
      else {
        if (new_word) {
          words.push(new_word);
          new_word = "";
        }
      }
    }
    
    return words.join("_");
  },

  compareArrays: function(array1, array2){ 
    if (array1.length !== array2.length)
      return false;

    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }

    return true; 
  },

  fizzBuzz: function(last){  
    results = [];

    for (var i = 1; i <= last; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        results.push("FIZZ");
      } else if (i % 5 === 0) {
        results.push("BUZZ");
      } else {
        results.push(i);
      }
    }

    return results;
  },

  myMap: function(array, method){  
    var result = [];

    array.forEach(function(element) {
      result.push(method(element));
    });

    return result;
  },

  primes: function(){  
    // your code here
  },
}