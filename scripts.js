

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

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}