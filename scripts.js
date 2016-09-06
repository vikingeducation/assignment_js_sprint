// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return Math.max.apply(null, arr);
  },
  
  reversed: function(str){
    var new_str = [];
    for (var i = 0; i < str.length; i++) {
      new_str.unshift(str[i]);
    };  
    return new_str.join("");
  },

  loudSnakeCase: function(str){  
    var new_str = str;
    var first_chars = new RegExp(/ \w/);
    var match, matches = [];

    while( (match = first_chars.exec(str)) != null ) {
      matches.push(match.index);
    }
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