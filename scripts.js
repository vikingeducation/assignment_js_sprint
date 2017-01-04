// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var max = arr[0];
    arr.forEach( function(el){
      if (el > max) {
        max = el;
      };
    });
    return max;
  },

  reversed: function(string){
    var result = "";
    for (var i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
    return result;
  },

  loudSnakeCase: function(sentence){
    // strip out punctuation
    var newSentence = sentence.replace(/[^\w\s]|_/g, "");
    // strip punctuation .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    // split words into array (" ")
    var words = newSentence.split(" ");

    var titlizedArray = [];
    console.log(words);
    for (var i = 0; i < words.length; i++ ) {
      var word = words[i];
      var restOfWord = word.length - 1;

      if ( word ) {
        // word[0] returns undefined for an empty string
        titlizedArray.push(word[0].toUpperCase() + word.substr(1, restOfWord));
      };
    };

    // join the words by '_'
    return titlizedArray.join("_");
  },

  compareArrays: function(arr1, arr2){
    var equal = false;

    if ( arr1.length === arr2.length ) {
      equal = true;
      for ( var i = 0; i < arr1.length; i++ ) {
        if (arr1[i] !== arr2[i]) {
          equal = false;
          break;
        };
      };
    };

    return equal;
  },

  fizzBuzz: function(number){
    var output = [];

    for ( var i = 1; i <= number; i++) {
      str = ""
      if (i%3 === 0) {
        str += "FIZZ";
      };
      if (i%5 === 0) {
        str += "BUZZ";
      };

      output.push(str || i);
    };

    return output;
  },

  myMap: function( arr, mapFunc){
    new_arr = [];

    arr.forEach( function(el) {
      new_arr.push( mapFunc(el) );
    });

    return new_arr;
  },

  primes: function(number){
    primes = []
    for (var i = 2; i <= number; i++) {
      is_prime = true;
      primes.forEach ( function(prime) {
        if (i%prime === 0) {
          is_prime = false;
        };
      });
      if (is_prime) {
        primes.push(i);
      };
    };

    return primes;
  },
}
