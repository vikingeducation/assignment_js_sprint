

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

  myMap: function( array, passedfunction ){
    var newArray = []
    for (i = 0; i < array.length; i++) {
      newArray.push( passedfunction( array[i] ) );
    };
    return newArray;
  },

  primes: function ( number ) {
    var primeNumbers = [];
    if ( number >= 2 ) {
      primeNumbers.push(2);
      for (var i = 3; i < number; i ++) {
        // Getting the square root of a number.
        var squareRootOfNumber = Math.sqrt(i);
        var isPrime = true;

        // So if squareRootofNumber is > 1 then it means the number will be 4 or above...
        if (squareRootOfNumber > 1) {
          // We wanna check if the number is divisible by 2
          // We also stop checking whether a number is prime at it's square root as the numbers below that can tell us whether or not the number is a prime or not.
          for (var j = 2; j <= squareRootOfNumber; j++) {
            if (i % j === 0) {
              isPrime = false;
              break;
            };
          };
        };
        // Pushing the number into our array if the number is a prime
        if (isPrime) {
          primeNumbers.push(i);
        };
      };
    };
    // Returning our array of prime numbers.
    return primeNumbers;
  }, 

  bubbleSort: function ( array ) {
    // Gotta loop until isSorted is true, hmmmmm, don't think we've learnt that yet...
    do {
      var isSorted = true;
      for (i = 0; i < array.length - 1; i++) {
        var itemOne = array[i];
        var itemTwo = array[i + 1];
        if (itemOne > itemTwo) {
          isSorted = false;
          array[i] = itemTwo;
          array[i + 1] = itemOne;
        };
      };
    } while ( isSorted === false );
    return array;
  }
}


