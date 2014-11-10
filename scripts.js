// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){  
    // your code here
  },
  
  reversed: function(){  
    // your code here
  },

  loudSnakeCase: function(){  
    // your code here
  },

  compareArrays: function(arrayOne, arrayTwo){ 
    // your code here (replace the return)
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    } else {
        arrayOne.forEach(function(elem, index){
          if(elem !== arrayTwo[index]){
            return false;
          }
        });
        return true;
    }
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
