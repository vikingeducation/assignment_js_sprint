// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){  
     return Math.max.apply(null, input);
   
  },
  
  reversed: function(input){  
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(input){  
    var array = input.split(" ").filter(function(n){ return n != "" });
    for(i = 0; i < array.length; i++) {
      array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1,array[i].length)
    };
    console.log( array.join("_"));
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