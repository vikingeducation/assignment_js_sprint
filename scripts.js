

// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function( array ) {  
    var largestElement = 0;
    for(var i = 0; i < array.length; i++) {
      if (array[i] > largestElement) {
        largestElement = array[i];
      };
    };
    return largestElement;
  },
  
  reversed: function( string ){  
    return string.split("")
                 .reverse()
                 .join("");
  },

  loudSnakeCase: function( string ){
    var splitString = string.split(" ");
    var filteredSplitString = [];
    // Function to see if a character is a letter
    function isLetter(str) {
      return !!(str.length === 1 && str.match(/[a-z]|[A-Z]/));
    };

    // Getting rid of empty strings
    for (var i = 0; i < splitString.length; i++) {
      if (splitString[i].length > 0) {
        filteredSplitString.push(splitString[i]);
      };
    };

    // Getting rid of all the punctuation
    for (var i = 0; i < filteredSplitString.length; i++) {
      var onlyLetters = [];
      for (var j = 0; j < filteredSplitString[i].length; j++) {
        // So write now we're going through each word right...
        // and we need to go throuch each letter.
        var character = filteredSplitString[i][j];
        if (!!(character.match(/[a-z]|[A-Z]/))) {
          onlyLetters.push(character);
        };
      };
      onlyLetters[0] = onlyLetters[0].toUpperCase();
      filteredSplitString[i] = onlyLetters.join("");
    };

    // Now joining everything with an underscore
    return filteredSplitString.join("_");
  },

  compareArrays: function (arrayOne, arrayTwo) {
    for (i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      };
    };
    return true
  },

  fizzBuzz: function( number ){
    var array = []
    for (i = 1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        array.push("FIZZBUZZ")
      } else if (i % 3 === 0) {
        array.push("FIZZ")
      } else if (i % 5 === 0) {
        array.push("BUZZ")
      } else {
        array.push(i)
      };
    };
    return array;
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}