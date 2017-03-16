// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    for (var i = 0; i < array.length; i ++) {
      var a = 0;
      var b = 0;
      if (a < array[i]) {
        b = array[i];
      }
    }
    return b;
  },

  reversed: function(array){
    var reverseArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
      reverseArray.push(array[i]);
    }
    return reverseArray;
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
