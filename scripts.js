// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(submission){  
    let largest;

    submission.forEach( function(element) {
      if ((largest === undefined) || (element > largest)) {
        largest = element;
      };
    });

    return largest;
  },
  
  reversed: function(){  
    // your code here
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
