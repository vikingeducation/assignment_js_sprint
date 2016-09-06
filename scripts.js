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
    var match, matches = [];
    var spaces = new RegExp(/\W+/);
    while (str.match(spaces)) {
      str = str.replace(spaces, "_");
    };
    var firstChars = new RegExp(/_[a-z]/);
    while (str.match(firstChars)) {
      var someMatch = str.match(firstChars);
      var replacementChar = str[someMatch.index + 1].toUpperCase();
      str = str.replace(someMatch, "_" + replacementChar);
    };
    if (str[str.length -1] === "_") {
      str = str.substring(0, str.length-1);
    };
    return str
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