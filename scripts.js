// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  

    var num = 0;
    for(var i = 0; i < array.length; i++){
      if(num < array[i]){
        num = array[i];
      }
    }
          return num;
  },
  
  reversed: function(string){  
    var string = string.split("").reverse().join("");
    return string;
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