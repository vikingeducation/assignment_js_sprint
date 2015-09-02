// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {


  largestEl: function(array){
    var n = array.length
    return array.sort()[n-1]
  },




  reversed: function(string){
    queue = []
    for (var i = 0; i < string.length; i++) {
      queue.unshift(string[i]);
    };
    return queue.join("");
  },




  loudSnakeCase: function(sentence){
    var letters = [];
    var capitalizeNext = true;

    var pushCapital = function(letter) {
      letters.push(letter.toUpperCase());
      capitalizeNext = false;
    };

    var pushUnderscore = function() {
      if (letters[letters.length - 1] === "_") {
        return
      }
      else {
        letters.push("_");
        capitalizeNext = true;
      };
    };

    var pushLetter = function(letter) {
      if (capitalizeNext === true) {
        pushCapital(letter);
      }
      else {
        letters.push(letter);
      };
    };


    for (var i = 0; i < sentence.length; i++) {
      if ( (/\w/).test(sentence[i]) ) {
        pushLetter(sentence[i]);
      }
      else if (sentence[i] === " ") {
        pushUnderscore();
      };
    };

    return letters.join("");
  },




  compareArrays: function(array1, array2){
    var equalLength = (array1.length === array2.length) ? true : false;


    var equalElements = function(array1, array2) {
      var check = 0;
      array1.forEach( function(el, index) {
        if (el !== array2[index]) {
          check = 1;
        };
      });
      return (check === 0);
    };

    if (equalLength && equalElements(array1, array2)) {
      return true;
    }
    else {
      return false;
    };
  },




  fizzBuzz: function(number){
    var output = [];

    var checkNumber = function(n) {
      var string = "";

      if (n % 3 === 0) {
        string += "FIZZ";
      };

      if (n % 5 === 0) {
        string += "BUZZ";
      };

      return (string === "") ? n : string;
    };


    for(var i = 1; i <= number; i++) {
      output.push(checkNumber(i));
    };

    return output;
  },




  myMap: function(array, myFunction){
    var output = [];

    for(var i = 0; i < array.length; i++) {
      output.push( myFunction.call(undefined, array[i]) );
    };

    return output;
  },




  primes: function(number){

    var getFactors = function(n) {
      var factors = []
      for(var i = 1; i <= n; i++) {
        (n % i === 0) ? factors.push(i) : undefined ;
      };
      return factors;
    };

    var isPrime = function(n) {
      return (getFactors(n).length === 2) ? true : false;
    };


    var output = [];

    for( var i = 2; i < number; i++) {
      (isPrime(i)) ? output.push(i) : undefined;
    }

    return output;

  },


}