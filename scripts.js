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

  loudSnakeCase: function(str){  
    // your code here
    var ret_s = str[0].toUpperCase();
    var lastCharSpace = false
    for (var i = 1; i < str.length; i++) {
      if (str[i] == " ") {
        if (!lastCharSpace) {
          ret_s += "_"
        }
        lastCharSpace = true
      } else if (["!", ",", "."].indexOf(str[i]) != -1) {
        // do nothing
        lastCharSpace = false
      } else {
        if (lastCharSpace) {
          ret_s += str[i].toUpperCase()
        } else {
          ret_s += str[i].toLowerCase()
        }
      lastCharSpace = false
      } 
    }
    return ret_s
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