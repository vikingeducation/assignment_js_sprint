// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function( array ){
    var largest = array[0];
    for ( var i = 1; i < array.length; i++ ) {
      if ( array[i] > largest ) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function( string ){
    reversed_string = "";
    for ( var i = string.length - 1; i >= 0; i-- ) {
      reversed_string += string[i];
    }
    return reversed_string
  },

  loudSnakeCase: function( string ){
    console.log(string);
    loudSnakeString = "";
    wordArr = string.split(/ +/);

    for ( var i = 0; i < wordArr.length; i++ ) {
      wordArr[i] = wordArr[i].split(/\W/).join("");
      wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    }
    console.log(wordArr.join("_"));
    return loudSnakeString = wordArr.join("_");
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
