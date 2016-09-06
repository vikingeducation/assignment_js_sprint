// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] >= largest) {
        largest = array[i];
      };
    };
    return largest;
  },
  
  reversed: function(string){  
    var reverse = "";
    for (var i = string.length - 1; i > 0; i--) {
      var reverse = reverse.concat(string[i]);
    };
    return reverse;
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