// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var largest = 0;
    array.forEach(function(el){
      if (el > largest){
        largest = el;
      }
    });
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

  loudSnakeCase: function(string){
    var stripped = string.replace(/[^a-z0-9]/, "");
    var array = string.split(" ");
    array.forEach(function(el){
      el.toUpperCase();
    });
    return array.join("_");
  },

  fizzBuzz: function(number){
    var array = [];
    for (var i = 1; i <= number; i++) {
      if (i % 3 === 0) {
       array.push("FIZZ");
      }
      if (i % 5 === 0) {
        array.push("BUZZ");
      }
      if (i % 5 === 0 && i % 3===0) {
        array.push("FIZZBUZZ");
      }
      else {
        array.push(i);
      }
    }
   return array;
  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!";
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
};
