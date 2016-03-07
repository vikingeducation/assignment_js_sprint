// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    // your code here
    return Math.max.apply(null, arr)
  },
  
  reversed: function(s){  
    // your code here
    leng = s.length
    var ret_s = ""
    for(var i = 0; i <leng; i++)
    {
      ret_s += s[leng - i - 1]
    }
    return ret_s
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