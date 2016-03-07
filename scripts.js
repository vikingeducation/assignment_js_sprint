// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var largest = 0;
    array.forEach(function(el){
      if (el > largest){
        largest = el;
      }
    })
    return largest;
  },

  reversed: function(string){
    // your code here
    var array = [];
    for (var i = string.length - 1; i >= 0; i--){
      array += string[i];
    }
    return array;
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
