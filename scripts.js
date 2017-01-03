var sprintFunctions = {
  largestEl: function(array){
    var descSorted = array.sort(function(a, b) {
      return b - a;
    });
    return descSorted[0];
  },

  reversed: function(string){
    var reversedString = "";
    for (var i = (string.length - 1); i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
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
