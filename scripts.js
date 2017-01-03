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
