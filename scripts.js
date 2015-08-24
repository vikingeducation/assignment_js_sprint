// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){  
    // input is an array
    return input.sort()[input.length - 1];
  },
  
  reversed: function(input){  
    // input is a string
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(input){  
    // input is a string
   
    var striped = input
    striped=striped.replace(/[!.?]/g,"");
    
    return striped.split(" ").forEach(function(el){ 
        el = el.charAt(0).toUpperCase()+el.slice(1);
    }).join("_");

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