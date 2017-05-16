// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {
    var largest = 0;
    for ( var i = 0; i < array.length; i++) {
      if( array[i] > largest ) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(myString) {
    var temp = "";
    for ( var i = myString.length - 1; i >= 0; i-- ) {
      temp += myString[i];
    }
    return temp;
  },

  loudSnakeCase: function(){
    // your code here
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
